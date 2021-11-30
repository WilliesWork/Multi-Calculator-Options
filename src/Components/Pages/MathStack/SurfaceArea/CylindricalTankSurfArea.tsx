import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CylindricalTankAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const CylindricalTankSurfArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    baseSurfaceArea: 0,
    lateralSurfaceArea: 0,
    radius: 0,
    height: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.cylindricalTankSurfArea}
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
          const payload: CylindricalTankAreaI = {
            radius,
            radius_unit,
            height,
            height_unit,
            method: 'cylindricalTankSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: cylindricalTank } = await calculateMath(payload)
            console.log('=====>', cylindricalTank)
            if (typeof cylindricalTank === 'object') {
              const { surfaceArea, base_surface_area, lateral_surface_area, radius, height, unit } = cylindricalTank
              setResult({
                surfaceArea: surfaceArea,
                baseSurfaceArea: base_surface_area,
                lateralSurfaceArea: lateral_surface_area,
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
              />

              <CustomSelect
                measurement="length"
                id="radius_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.height} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="height_unit"
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Tank Surface Area: {Result.surfaceArea} {Result.unit}<sup>2</sup></Typography>
              <Typography variant="subtitle1">Base Surface Area: {Result.baseSurfaceArea}</Typography>
              <Typography variant="subtitle1">Lateral Surface Area: {Result.lateralSurfaceArea}</Typography>
              <Typography variant="subtitle1">Radius: {Result.radius}</Typography>
              <Typography variant="subtitle1">Height: {Result.height}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CylindricalTankSurfArea
