import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { InflationCalculatorCpiDataI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const InflationCalculatorCpiData = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    current_price: "",
    price_in_base: "",
  })
  const [Result, setResult] = React.useState({
    inflation: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.inflationCalculatorCpiData}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          current_price,
          price_in_base,
        }, { setSubmitting, resetForm }) => {
          const payload: InflationCalculatorCpiDataI = {
            current_price,
            price_in_base,
            method: 'inflationCalculatorWithUsCPIData'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: inflationCalculator } = await calculateFinances(payload)
            console.log('=====>', inflationCalculator)
            const { inflation, currency } = inflationCalculator
            if (typeof inflationCalculator === 'object') {
              setResult({
                inflation: inflation,
                currency: currency
              })
            }
            resetForm()
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <Label title={LABELS.currentPrice} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="current_price"
                placeholder={PLACEHOLDERS.number}
                value={values.current_price}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.priceInBase} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="price_in_base"
                placeholder={PLACEHOLDERS.number}
                value={values.price_in_base}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Inflation: {Result.currency}{Result.inflation}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default InflationCalculatorCpiData
