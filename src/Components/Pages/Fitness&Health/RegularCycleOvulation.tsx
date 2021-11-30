import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { RegularCycleOvulationI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const RegularCycleOvulation = () => {
  const classes = useStyles()
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
            method: 'regularCycleOvulationCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: regularOvulationCycle } = await calculateHealth(payload)
            console.log('=====>', regularOvulationCycle)
            if (typeof regularOvulationCycle === 'object') {
              const { importantDatesForCurrentCycle, importantDatesNextSixCycles } = regularOvulationCycle
              setResult({
                importantDatesForCurrentCycle: importantDatesForCurrentCycle,
                importantDatesNextSixCycles: importantDatesNextSixCycles
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
                id="previous_cycle_start_date"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.cycleDays} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="cycle_days"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

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
