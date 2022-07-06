import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ProfitMarginCalculatorI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../services/AppCalculatorsApi'

const ProfitMarginCalculator = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
              <CustomForm
                type={INPUT_TYPE.number}
                id="sales_revenue"
                placeholder={PLACEHOLDERS.number}
                value={values.sales_revenue}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.cost} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="cost"
                placeholder={PLACEHOLDERS.number}
                value={values.cost}
                onChange={handleChange}
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
