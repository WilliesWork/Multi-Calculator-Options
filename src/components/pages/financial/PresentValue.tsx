import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { PresentValueI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../services/AppCalculatorsApi'

const PresentValue = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    interest_rate: "",
    predetermined_amount: "",
    number_of_months: "",
    number_of_years: "",
  })
  const [Result, setResult] = React.useState({
    PV: 0,
    totalInterest: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.presentValue}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          predetermined_amount,
          number_of_months,
          number_of_years,
        }, { setSubmitting, resetForm }) => {
          const payload: PresentValueI = {
            interest_rate,
            predetermined_amount,
            number_of_months,
            number_of_years,
            method: 'presentValue'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: presentValueOfFutureMoney } = await calculateFinances(payload)
            console.log('=====>', presentValueOfFutureMoney)
            const { PV, totalInterest, currency } = presentValueOfFutureMoney
            if (typeof presentValueOfFutureMoney === 'object') {
              setResult({
                PV: PV,
                totalInterest: totalInterest,
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
              <Label title={LABELS.interestRate} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="interest_rate"
                placeholder={PLACEHOLDERS.number}
                value={values.interest_rate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.predeterminedAmount} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="predetermined_amount"
                placeholder={PLACEHOLDERS.number}
                value={values.predetermined_amount}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.numberOfMonths} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="number_of_months"
                placeholder={PLACEHOLDERS.number}
                value={values.number_of_months}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.numberOfYears} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="number_of_years"
                placeholder={PLACEHOLDERS.number}
                value={values.number_of_years}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Present value: {Result.currency}{Result.PV}</Typography>
              <Typography variant="subtitle1"> Total interest: {Result.currency}{Result.totalInterest}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default PresentValue
