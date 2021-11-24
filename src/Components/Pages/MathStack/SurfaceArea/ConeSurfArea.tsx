import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConeAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'
import { ConeAreaResultI } from '../../../../Types/PaylaodResponeI'

const ConeSurfArea = () => {
  const classes = useStyles()
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
          {CALCULATORS.coneSurfArea}
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
            if (typeof coneArea === 'object') {
              const { $lateralSurfaceArea, totalConeSurfaceArea, baseSurfaceSrea, units }: ConeAreaResultI = coneArea
              setResult({
                $lateralSurfaceArea: $lateralSurfaceArea,
                baseSurfaceSrea: baseSurfaceSrea,
                totalConeSurfaceArea: totalConeSurfaceArea,
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
              <Typography variant="subtitle1">LateralSurfaceArea: {Result.$lateralSurfaceArea} {Result.units}<sup>2</sup></Typography>
              <Typography variant="subtitle1">BaseSurfaceArea: {Result.baseSurfaceSrea} </Typography>
              <Typography variant="subtitle1">TotalConeSurfaceArea: {Result.totalConeSurfaceArea} </Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConeSurfArea
