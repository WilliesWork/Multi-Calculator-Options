import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { SphereVolumeCalculatorI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const SphereVolume = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
  })
  const [Result, setResult] = React.useState({
    Volume: 0,
    radius: '',
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.sphereVol}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit
        }, { setSubmitting, resetForm }) => {
          const payload: SphereVolumeCalculatorI = {
            radius,
            radius_unit,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: sphereVolume } = await calculateMath(payload)
            console.log('=====>', sphereVolume)
            const { volume, units, radius
            } = sphereVolume
            if (typeof sphereVolume === 'object') {
              setResult({
                Volume: volume,
                radius: radius,
                unit: units
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
              <Label title={LABELS.radius} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="radius"
                placeholder={PLACEHOLDERS.number}
                value={values.radius}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="radius_unit"
                value={values.radius_unit}
                onChange={handleChange('radius_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Volume: {Result.Volume} {Result.unit}<sup>3</sup></Typography>
              <Typography variant="subtitle1"> Radius: {Result.radius}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default SphereVolume
