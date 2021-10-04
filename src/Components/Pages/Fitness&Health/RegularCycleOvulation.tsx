import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { RegularCycleOvulationI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'

const RegularCycleOvulation = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    cycle_days: '',
    previous_cycle_start_date: ''
  })
  const [Result, setResult] = React.useState({
    importantDatesForCurrentCycle: "",
    importantDatesNextSixCycles: ""
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.regularCycleOvulation}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          cycle_days,
          previous_cycle_start_date
        }, { setSubmitting, resetForm }) => {
          const payload: RegularCycleOvulationI = {
            cycle_days,
            previous_cycle_start_date,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /* const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
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
              <div className="form-group col-6">
                <label htmlFor="previous_cycle_start_date">{LABELS.previousCycleStartDate}</label>
                <input
                  type={INPUT_TYPE.date}
                  className="form-control"
                  id="previous_cycle_start_date"
                  placeholder={PLACEHOLDERS.number}
                  value={values.previous_cycle_start_date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="cycle_days">{LABELS.cycleDays}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="cycle_days"
                  placeholder={PLACEHOLDERS.number}
                  value={values.cycle_days}
                  onChange={handleChange}
                />
              </div>
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
              <Typography variant="subtitle1">Important dates for current cycle: {Result.importantDatesForCurrentCycle}</Typography>
              <Typography variant="subtitle1">Important dates for next 6 cycles: {Result.importantDatesNextSixCycles}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default RegularCycleOvulation
