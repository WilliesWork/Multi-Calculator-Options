import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { AmortizedLoanFixedAmountI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const AmortizedLoanFixedAmount = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    present_value: "",
    number_of_months: "",
    number_of_years: "",
  })
  const [Result, setResult] = React.useState({
    totalRepayment: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.amortizedLoanFixedAmount}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          present_value,
          number_of_months,
          number_of_years,
        }, { setSubmitting, resetForm }) => {
          const payload: AmortizedLoanFixedAmountI = {
            interest_rate,
            present_value,
            number_of_months,
            number_of_years,
            method: 'amortizedLoanFixeAmount'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: amortizedLoanWithFixedAmount } = await calculateFinances(payload)
            console.log('=====>', amortizedLoanWithFixedAmount)
            const { totalRepayment, currency } = amortizedLoanWithFixedAmount
            if (typeof amortizedLoanWithFixedAmount === 'object') {
              setResult({
                totalRepayment: totalRepayment,
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
              <Label title={LABELS.numberOfMonths} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="number_of_months"
                placeholder={PLACEHOLDERS.number}
                value={values.number_of_months}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.presentValue} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="present_value"
                placeholder={PLACEHOLDERS.number}
                value={values.present_value}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.numberOfYears} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="number_of_years"
                placeholder={PLACEHOLDERS.number}
                value={values.number_of_years}
                onChange={handleChange}
              />
            </div>


            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Total Repayment: {Result.currency}{Result.totalRepayment}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default AmortizedLoanFixedAmount
