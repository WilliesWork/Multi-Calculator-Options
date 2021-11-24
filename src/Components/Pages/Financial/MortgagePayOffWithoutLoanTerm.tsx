import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { MortgagePayOffWithoutLoanTermI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const MortgagePayOffWithoutLoanTerm = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    principal_balance: "",
    monthly_payment: "",
  })
  const [Result, setResult] = React.useState({
    answer: 0,
    years: 0,
    months: 0,

  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.mortgagePayOffWithoutLoanTerm}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          principal_balance,
          monthly_payment
        }, { setSubmitting, resetForm }) => {
          const payload: MortgagePayOffWithoutLoanTermI = {
            interest_rate,
            principal_balance,
            monthly_payment,
            method: 'mortagePayOffCalculatorWithoutLoanTerm'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: mortgagePayoffCalculator } = await calculateFinances(payload)
            console.log('=====>', mortgagePayoffCalculator)
            const { answer, years, months } = mortgagePayoffCalculator
            if (typeof mortgagePayoffCalculator === 'object') {
              setResult({
                answer: answer,
                years: years,
                months: months
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
              <Label title={LABELS.principalBalance} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="principal_balance"
                placeholder={PLACEHOLDERS.number}
                value={values.principal_balance}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.monthlyPayment} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="monthly_payment"
                placeholder={PLACEHOLDERS.number}
                value={values.monthly_payment}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Answer: {Result.answer}</Typography>
              <Typography variant="subtitle1"> Payoff in: {Result.years} years and {Result.months} months</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default MortgagePayOffWithoutLoanTerm
