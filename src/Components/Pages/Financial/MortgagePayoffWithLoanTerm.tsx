import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { MortgagePayoffWithLoanTermI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const MortgagePayoffWithLoanTerm = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    total_payments_years: "",
    payments_made_years: "",
    loan_amount: "",
  })
  const [Result, setResult] = React.useState({
    balance: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.mortgagePayoffWithLoanTerm}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          total_payments_years,
          payments_made_years,
          loan_amount,
        }, { setSubmitting, resetForm }) => {
          const payload: MortgagePayoffWithLoanTermI = {
            interest_rate,
            total_payments_years,
            payments_made_years,
            loan_amount,
            method: 'mortagePayOffCalculatorWithLoanTerm'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: mortgagePayoffWithLoanTerm } = await calculateFinances(payload)
            console.log('=====>', mortgagePayoffWithLoanTerm)
            const { balance, currency } = mortgagePayoffWithLoanTerm
            if (typeof mortgagePayoffWithLoanTerm === 'object') {
              setResult({
                balance: balance,
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
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="interest_rate"
                placeholder={PLACEHOLDERS.number}
                value={values.interest_rate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.paymentsMade} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="payments_made_years"
                placeholder={PLACEHOLDERS.number}
                value={values.payments_made_years}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.totalPaymentsperYear} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="total_payments_years"
                placeholder={PLACEHOLDERS.number}
                value={values.total_payments_years}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.loanAmount} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="loan_amount"
                placeholder={PLACEHOLDERS.number}
                value={values.loan_amount}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Balance: {Result.currency}{Result.balance}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default MortgagePayoffWithLoanTerm
