import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { PresentValueOfPeriodicalDepositI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const PresentValueOfPeriodicalDeposit = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    period_deposit: "",
    number_of_months: "",
    number_of_years: "",
  })
  const [Result, setResult] = React.useState({
    presentValue: 0,
    futureValue: 0,
    totalPrincipal: 0,
    totalInterest: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.presentValueOfPeriodicalDeposit}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          period_deposit,
          number_of_months,
          number_of_years,
        }, { setSubmitting, resetForm }) => {
          const payload: PresentValueOfPeriodicalDepositI = {
            interest_rate,
            period_deposit,
            number_of_months,
            number_of_years,
            method: 'presentValueOfPeriodDeposit'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: presentValueOfPeriodicalDeposits } = await calculateFinances(payload)
            console.log('=====>', presentValueOfPeriodicalDeposits)
            const { presentValue, futureValue, totalPricipal, totalInterest, currency } = presentValueOfPeriodicalDeposits
            if (typeof presentValueOfPeriodicalDeposits === 'object') {
              setResult({
                presentValue: presentValue,
                futureValue: futureValue,
                totalPrincipal: totalPricipal,
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
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="interest_rate"
                placeholder={PLACEHOLDERS.number}
                value={values.interest_rate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.periodDeposit} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="period_deposit"
                placeholder={PLACEHOLDERS.number}
                value={values.period_deposit}
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
              <Typography variant="subtitle1"> Present value: {Result.currency}{Result.presentValue}</Typography>
              <Typography variant="subtitle1"> Future value: {Result.currency}{Result.futureValue}</Typography>
              <Typography variant="subtitle1"> Total principal: {Result.currency}{Result.totalPrincipal}</Typography>
              <Typography variant="subtitle1"> Total interest: {Result.currency}{Result.totalInterest}</Typography>

            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default PresentValueOfPeriodicalDeposit
