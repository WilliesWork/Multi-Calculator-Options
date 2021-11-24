import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConeVolumeCalculatorI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const ConeVolume = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState({
    volumeInRadiusUnit: 0,
    volumeInHeightUnit: 0,
    radiusToHeightUnit: 0,
    heightToRadiusUnit: 0,
    radiusUnit: '',
    heightUnit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.coneVol}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit,
          height,
          height_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: ConeVolumeCalculatorI = {
            radius,
            radius_unit,
            height,
            height_unit,
            method: 'ConeVolumeCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: coneVolume } = await calculateMath(payload)
            const { units, volumeInRadiusUnit, volumeInHeightUnit, radiusToHeightUnit, heightToRadiusUnit, radiusUnit, heightUnit } = coneVolume
            console.log('=====>', coneVolume)
            if (typeof coneVolume === 'object') {
              setResult({
                volumeInRadiusUnit: volumeInRadiusUnit,
                volumeInHeightUnit: volumeInHeightUnit,
                radiusToHeightUnit: radiusToHeightUnit,
                heightToRadiusUnit: heightToRadiusUnit,
                radiusUnit: radiusUnit,
                heightUnit: heightUnit
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
              <CustomTextInput
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

            <div className="form-row">
              <Label title={LABELS.height} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="height_unit"
                value={values.height_unit}
                onChange={handleChange('height_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Volume in given radius unit: {Result.volumeInRadiusUnit} {Result.radiusUnit}<sup>3</sup></Typography>
              <Typography variant="subtitle1"> Volume in given height unit: {Result.volumeInHeightUnit} {Result.heightUnit}<sup>3</sup></Typography>
              <Typography variant="subtitle1"> Radius to height unit: {Result.radiusToHeightUnit}</Typography>
              <Typography variant="subtitle1"> Height to radius unit: {Result.heightToRadiusUnit}</Typography>

            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConeVolume
