import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConeAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomForm, CustomSelect } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'
import { ConeAreaResultI } from '../../../../Types/PaylaodResponeI'

const ConeArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState<ConeAreaResultI>({
    $lateralSurfaceArea: 0,
    baseSurfaceSrea: 0,
    totalConeSurfaceArea: 0,
    units: ''

  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.coneArea}
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
          const payload: ConeAreaI = {
            radius,
            radius_unit,
            height,
            height_unit,
            method: 'coneSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: coneArea } = await calculateMath(payload)
            console.log('=====>', coneArea)
            if (typeof coneArea === 'object'){
              const {$lateralSurfaceArea, totalConeSurfaceArea, baseSurfaceSrea, units}  : ConeAreaResultI= coneArea
              setResult({ $lateralSurfaceArea: $lateralSurfaceArea,
                baseSurfaceSrea: baseSurfaceSrea,
                totalConeSurfaceArea: totalConeSurfaceArea,
                units: units
              })
              
            }
            // if (typeof calsurfaceArea === 'object') {
            //   console.log(calsurfaceArea)
            //   setResult({
            //     surfaceArea: calsurfaceArea.surfaceAreas,
            //     Area: calsurfaceArea.Area
            //   })
            // }
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
              <Typography variant="subtitle1">LateralSurfaceArea: {Result.$lateralSurfaceArea} </Typography>
              <Typography variant="subtitle1">BaseSurfaceArea: {Result.baseSurfaceSrea} </Typography>
              <Typography variant="subtitle1">TotalConeSurfaceArea: {Result.totalConeSurfaceArea} </Typography>
              <Typography variant="subtitle1">Units: {Result.units} </Typography>



            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConeArea
