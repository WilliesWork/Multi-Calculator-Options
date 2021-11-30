import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ProfitMarginCalculatorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const ProfitMarginCalculator = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    sales_revenue: "",
    cost: "",
  })
  const [Result, setResult] = React.useState({
    grossMargin: 0,
    grossProfit: 0,
    markUp: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.profitMargin}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          sales_revenue,
          cost,
        }, { setSubmitting, resetForm }) => {
          const payload: ProfitMarginCalculatorI = {
            sales_revenue,
            cost,
            method: 'profitMarginCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: profitMarginCalculator } = await calculateFinances(payload)
            console.log('=====>', profitMarginCalculator)
            const { grossMargin, grossProfit, markUp, currency } = profitMarginCalculator
            if (typeof profitMarginCalculator === 'object') {
              setResult({
                grossMargin: grossMargin,
                grossProfit: grossProfit,
                markUp: markUp,
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
              <Label title={LABELS.salesRevenue} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="sales_revenue"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.cost} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="cost"
                placeholder={PLACEHOLDERS.number}
              />
            </div>


            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Gross margin: {Result.grossMargin}%</Typography>
              <Typography variant="subtitle1"> Gross profit: {Result.currency}{Result.grossProfit}</Typography>
              <Typography variant="subtitle1"> Mark up: {Result.markUp}%</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ProfitMarginCalculator
