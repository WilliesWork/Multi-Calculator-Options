import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { PaybackWithinTimeframeI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../services/AppCalculatorsApi'

const PaybackWithinTimeframe = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    interest_rate: "",
    credit_card_balance: "",
    months: "",
    year: "",
  })
  const [Result, setResult] = React.useState({
    paybackPeriod: 0,
    duration: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.paybackWithinTimeFrame}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          interest_rate,
          credit_card_balance,
          months,
          year,
        }, { setSubmitting, resetForm }) => {
          const payload: PaybackWithinTimeframeI = {
            interest_rate,
            credit_card_balance,
            months,
            year,
            method: 'PaybackWithinCertainTimeframe'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: paybackWithinACertainTimeframe } = await calculateFinances(payload)
            console.log('=====>', paybackWithinACertainTimeframe)
            const { paybackPeriod, duration } = paybackWithinACertainTimeframe
            if (typeof paybackWithinACertainTimeframe === 'object') {
              setResult({
                paybackPeriod: paybackPeriod,
                duration: duration
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
              <Label title={LABELS.months} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="months"
                placeholder={PLACEHOLDERS.number}
                value={values.months}
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
              <Label title={LABELS.year} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="year"
                placeholder={PLACEHOLDERS.number}
                value={values.year}
                onChange={handleChange}
              />
            </div>


            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Payback period: {Result.paybackPeriod}{Result.duration}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default PaybackWithinTimeframe
