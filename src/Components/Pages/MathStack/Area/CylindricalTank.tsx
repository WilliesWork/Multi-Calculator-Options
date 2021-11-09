import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CylindricalTankAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import { Units } from '../../../../Common/MathUnits'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomForm, CustomSelect } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const CylindricalTank = () => {
  const classes = useStyles();
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
   units: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.cylindricalTankArea}
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
              const {cylindricalTankSurfaceArea,base_surface_area, lateral_surface_area, units} = cylindricalTank
              setResult({
                surfaceArea: cylindricalTankSurfaceArea,
                baseSurfaceArea: base_surface_area,
                lateralSurfaceArea: lateral_surface_area,
                units: units
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
              <CustomForm
                label={LABELS.radius}
                type={INPUT_TYPE.number}
                id="radius"
                placeholder={PLACEHOLDERS.number}
                value={values.radius}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="radius_unit"
                value={values.radius_unit}
                onChange={handleChange('radius_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.height}
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="height_unit"
                value={values.height_unit}
                onChange={handleChange('height_unit')}
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
              <Typography variant="subtitle1"> Tank Surface Area: {Result.surfaceArea}</Typography>
              <Typography variant="subtitle1"> Base Surface Area: {Result.baseSurfaceArea}</Typography>
              <Typography variant="subtitle1"> Lateral Surface Area: {Result.lateralSurfaceArea}</Typography>
              <Typography variant="subtitle1"> Units: {Result.units}</Typography>

            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CylindricalTank
