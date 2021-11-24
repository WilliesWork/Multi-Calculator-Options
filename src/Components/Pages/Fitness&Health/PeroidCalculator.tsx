import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { PeroidCalculatorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const PeroidCalculator = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    start_date_of_last_cycle: '',
    cycle_length: '',
    last_period_days: ''
  })
  const [Result, setResult] = React.useState({
    period: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.peroidCalculator}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          start_date_of_last_cycle,
          cycle_length,
          last_period_days,
        }, { setSubmitting, resetForm }) => {
          const payload: PeroidCalculatorI = {
            start_date_of_last_cycle,
            cycle_length,
            last_period_days,
            method: 'PeriodCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: periodCalculator } = await calculateHealth(payload)
            console.log('=====>', periodCalculator)
            if (typeof periodCalculator === 'object') {
              const { period } = periodCalculator
              setResult({
                period: period,
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
              <Label title={LABELS.previousCycleStartDate} />
              <CustomTextInput
                type={INPUT_TYPE.date}
                id="start_date_of_last_cycle"
                placeholder={PLACEHOLDERS.number}
                value={values.start_date_of_last_cycle}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.cycleLength} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="cycle_length"
                placeholder={PLACEHOLDERS.number}
                value={values.cycle_length}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.lastPeriodDays} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="last_period_days"
                placeholder={PLACEHOLDERS.number}
                value={values.last_period_days}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Period: {Result.period}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div >
  )
}

export default PeroidCalculator
