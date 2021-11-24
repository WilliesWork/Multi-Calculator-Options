import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { SphericalCapSurfaceAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const SphericalCapSurfaceArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    radius: '',
    radius_unit: '',
    height: '',
    height_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    radius: 0,
    height: 0,
    unit: '',
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.sphericalCapSurfArea}
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
          const payload: SphericalCapSurfaceAreaI = {
            radius,
            radius_unit,
            height,
            height_unit,
            method: 'CapSurfaceArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: CapSurfaceArea } = await calculateMath(payload)
            console.log('=====>', CapSurfaceArea)
            const { surfaceArea, radius, height, unit
            } = CapSurfaceArea
            if (typeof CapSurfaceArea === 'object') {
              setResult({
                surfaceArea: surfaceArea,
                radius: radius,
                height: height,
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
              <Typography variant="subtitle1">Surface Area: {Result.surfaceArea} {Result.unit}<sup>2</sup></Typography>
              <Typography variant="subtitle1"> Radius: {Result.radius}</Typography>
              <Typography variant="subtitle1"> Height: {Result.height}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default SphericalCapSurfaceArea
