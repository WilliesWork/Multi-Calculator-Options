import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { HorsepowerCalculationI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const HorsepowerCalculation = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    force: "",
    force_unit: "",
    distance: "",
    distance_unit: "",
    time: "",
    time_unit: "",
  })
  const [Result, setResult] = React.useState({
    Answer: 0
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
                label={LABELS.force}
                type={INPUT_TYPE.number}
                id="force"
                placeholder={PLACEHOLDERS.number}
                value={values.force}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="force_unit"
                value={values.force_unit}
                onChange={handleChange('force_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.distance}
                type={INPUT_TYPE.number}
                id="distance"
                placeholder={PLACEHOLDERS.number}
                value={values.distance}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="distance_unit"
                value={values.distance_unit}
                onChange={handleChange('distance_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.time}
                type={INPUT_TYPE.number}
                id="time"
                placeholder={PLACEHOLDERS.number}
                value={values.time}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="time_unit"
                value={values.time_unit}
                onChange={handleChange('time_unit')}
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

export default HorsepowerCalculation
