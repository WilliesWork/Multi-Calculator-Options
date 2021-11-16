import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { PeroidCalculatorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const PeroidCalculator = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    start_date_of_last_cycle: '',
    cycle_length: '',
    last_period_days: ''
  })
  const [Result, setResult] = React.useState({
    Answer: 0
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
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /*  const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
             console.log('=====>', calsurfaceArea)
             if (typeof calsurfaceArea === 'object') {
               console.log(calsurfaceArea)
               setResult({
                 surfaceArea: calsurfaceArea.surfaceAreas,
                 Area: calsurfaceArea.Area
               })
             }
             resetForm() */
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <CustomForm
                label={LABELS.previousCycleStartDate}
                type={INPUT_TYPE.date}
                id="start_date_of_last_cycle"
                placeholder={PLACEHOLDERS.number}
                value={values.start_date_of_last_cycle}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.cycleLength}
                type={INPUT_TYPE.number}
                id="cycle_length"
                placeholder={PLACEHOLDERS.number}
                value={values.cycle_length}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.lastPeriodDays}
                type={INPUT_TYPE.number}
                id="last_period_days"
                placeholder={PLACEHOLDERS.number}
                value={values.last_period_days}
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
              <Typography variant="subtitle1">Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div >
  )
}

export default PeroidCalculator
