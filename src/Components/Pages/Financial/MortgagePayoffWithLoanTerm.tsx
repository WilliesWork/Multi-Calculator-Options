import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { MortgagePayoffWithLoanTermI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const MortgagePayoffWithLoanTerm = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    interest_rate: "",
    total_payments_years: "",
    payments_made_years: "",
    loan_amount: "",
  })
  const [Result, setResult] = React.useState({
    Answer: 0
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
            // method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateCylinderVolume(payload)
            // console.log('=====>', calsurfaceArea)
            // if (typeof calsurfaceArea === 'object') {
            //   console.log(calsurfaceArea)
            //   setResult({
            //     surfaceArea: calsurfaceArea.surfaceAreas,
            //     Area: calsurfaceArea.Area
            //   })
            // }
            // resetForm()
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <CustomForm
                label={LABELS.interestRate}
                type={INPUT_TYPE.number}
                id="interest_rate"
                placeholder={PLACEHOLDERS.number}
                value={values.interest_rate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.paymentsMade}
                type={INPUT_TYPE.number}
                id="payments_made_years"
                placeholder={PLACEHOLDERS.number}
                value={values.payments_made_years}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.totalPaymentsperYear}
                type={INPUT_TYPE.number}
                id="total_payments_years"
                placeholder={PLACEHOLDERS.number}
                value={values.total_payments_years}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.loanAmount}
                type={INPUT_TYPE.number}
                id="loan_amount"
                placeholder={PLACEHOLDERS.number}
                value={values.loan_amount}
                onChange={handleChange}
              />
            </div>


            <div className="form mb-3">
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                className="btn btn-primary"
              >
                {BUTTONS.calculate}
              </Button>
            </div>

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default MortgagePayoffWithLoanTerm
