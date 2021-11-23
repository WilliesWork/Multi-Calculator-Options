import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { BondPayBackPredeterminedI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../Services/AppCalculatorsApi'

const BondPayBackPredetermined = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    interest_rate: "",
    predetermined_amount: "",
    number_of_months: "",
    number_of_years: "",
  })
  const [Result, setResult] = React.useState({
    monthlyRepayments: 0,
    totalAmountRepayable: 0,
    currency: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bondPayBackPredetermined}
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
          const payload: BondPayBackPredeterminedI = {
            interest_rate,
            predetermined_amount,
            number_of_months,
            number_of_years,
            method: 'bondPayBackPredeterminedAmountAtLoanMaturity'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: bondPaybackWithPredeterminedAmount } = await calculateFinances(payload)
            console.log('=====>', bondPaybackWithPredeterminedAmount)
            const { monthlyRepayments, totalAmountRepayable, currency } = bondPaybackWithPredeterminedAmount
            if (typeof bondPaybackWithPredeterminedAmount === 'object') {
              setResult({
                monthlyRepayments: monthlyRepayments,
                totalAmountRepayable: totalAmountRepayable,
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
              <Typography variant="subtitle1"> Your monthly repayments: {Result.currency}{Result.monthlyRepayments}</Typography>
              <Typography variant="subtitle1"> Total amount repayments: {Result.currency}{Result.totalAmountRepayable}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default BondPayBackPredetermined
