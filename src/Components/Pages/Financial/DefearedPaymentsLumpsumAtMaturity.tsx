import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { DefearedPaymentsLumpsumAtMaturityI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const DefearedPaymentsLumpsumAtMaturity = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    loan_amount: "",
    number_of_months: "",
    number_of_years: "",
  })
  const [Result, setResult] = React.useState({
    amountDueAtLoanMaturity: 0,
    totalInterest: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.defearedPaymentsLumpsumAtMaturity}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          loan_amount,
          number_of_months,
          number_of_years,
        }, { setSubmitting, resetForm }) => {
          const payload: DefearedPaymentsLumpsumAtMaturityI = {
            interest_rate,
            loan_amount,
            number_of_months,
            number_of_years,
            method: 'DeferedPaymentLumpSumAtMaturity'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: deferedPaymentLumpsumAtMaturity } = await calculateFinances(payload)
            console.log('=====>', deferedPaymentLumpsumAtMaturity)
            const { amountDueAtLoanMaturity, totalInterest, currency } = deferedPaymentLumpsumAtMaturity
            if (typeof deferedPaymentLumpsumAtMaturity === 'object') {
              setResult({
                amountDueAtLoanMaturity: amountDueAtLoanMaturity,
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
              <Label title={LABELS.creditCardBalance} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="loan_amount"
                placeholder={PLACEHOLDERS.number}
                value={values.loan_amount}
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
              <Typography variant="subtitle1"> Amount due at loan maturity: {Result.currency}{Result.amountDueAtLoanMaturity}</Typography>
              <Typography variant="subtitle1"> Total interest: {Result.currency}{Result.totalInterest}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default DefearedPaymentsLumpsumAtMaturity
