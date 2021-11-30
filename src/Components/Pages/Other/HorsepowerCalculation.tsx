import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { HorsepowerCalculationI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const HorsepowerCalculation = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    force: "",
    force_unit: "",
    distance: "",
    distance_unit: "",
    time: "",
    time_unit: "",
  })
  const [Result, setResult] = React.useState({
    horsepower: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.horsepowerCalculation}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          force,
          force_unit,
          distance,
          distance_unit,
          time,
          time_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: HorsepowerCalculationI = {
            force,
            force_unit,
            distance,
            distance_unit,
            time,
            time_unit,
            method: 'HorsepowerCalculationBasedOnDefinition'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: horsepowerCalculation } = await calculateOthers(payload)
            console.log('=====>', horsepowerCalculation)
            const { horsepower, unit,
            } = horsepowerCalculation
            if (typeof horsepowerCalculation === 'object') {
              setResult({
                horsepower: horsepower,
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
              <Label title={LABELS.force} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="force"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="force"
                id="force_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.distance} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="distance"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="distance_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.time} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="time"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="time"
                id="time_unit"
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Horsepower: {Result.horsepower}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default HorsepowerCalculation
