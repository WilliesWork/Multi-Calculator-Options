import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ElapsedTimeMethodI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const ElapsedTimeMethod = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    weight: "",
    weight_unit: "",
    time: "",
    time_unit: "",
  })
  const [Result, setResult] = React.useState({
    elapsedTime: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.elapsedTimeMethod}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          weight,
          weight_unit,
          time,
          time_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: ElapsedTimeMethodI = {
            weight,
            weight_unit,
            time,
            time_unit,
            method: 'TheElapsedTimeMethod'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: elapsedTimeMethod } = await calculateOthers(payload)
            console.log('=====>', elapsedTimeMethod)
            const { elapsedTime, unit,
            } = elapsedTimeMethod
            if (typeof elapsedTimeMethod === 'object') {
              setResult({
                elapsedTime: elapsedTime,
                unit: unit
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
              <Label title={LABELS.weight} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
                value={values.weight}
                onChange={handleChange}
              />

              <CustomSelect
                id="weight_unit"
                value={values.weight_unit}
                onChange={handleChange('weight_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.time} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="time"
                placeholder={PLACEHOLDERS.number}
                value={values.time}
                onChange={handleChange}
              />

              <CustomSelect
                id="time_unit"
                value={values.time_unit}
                onChange={handleChange('time_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Elapsed Time: {Result.elapsedTime}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ElapsedTimeMethod
