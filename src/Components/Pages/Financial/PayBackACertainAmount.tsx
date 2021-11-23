import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { PayBackACertainAmountI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const PayBackACertainAmount = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    credit_card_balance: "",
    monthly_payment: "",
  })
  const [Result, setResult] = React.useState({
    monthlyPay: 0,
    $profit: 0,
    totalPayments: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.payBackACertainAmount}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          credit_card_balance,
          monthly_payment,
        }, { setSubmitting, resetForm }) => {
          const payload: PayBackACertainAmountI = {
            interest_rate,
            credit_card_balance,
            monthly_payment,
            method: 'PaybackACertainAmount'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: paybackACertainAmount } = await calculateFinances(payload)
            console.log('=====>', paybackACertainAmount)
            const { monthlyPay, $profit, totalPayments, currency } = paybackACertainAmount
            if (typeof paybackACertainAmount === 'object') {
              setResult({
                monthlyPay: monthlyPay,
                $profit: $profit,
                totalPayments: totalPayments,
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
                id="credit_card_balance"
                placeholder={PLACEHOLDERS.number}
                value={values.credit_card_balance}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.monthlyPayment} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="monthly_payment"
                placeholder={PLACEHOLDERS.number}
                value={values.monthly_payment}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Monthly pay: {Result.currency}{Result.monthlyPay}</Typography>
              <Typography variant="subtitle1"> Profit: {Result.currency}{Result.$profit}</Typography>
              <Typography variant="subtitle1"> Total payments: {Result.currency}{Result.totalPayments}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div >
  )
}

export default PayBackACertainAmount
