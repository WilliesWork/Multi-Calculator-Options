import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { CapsuleSurfaceAreaI } from '../../../Types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const CapsuleSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    base_radius: '',
    base_radius_unit: '',
    height: "",
    height_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.capsuleSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          base_radius,
          base_radius_unit,
          height,
          height_unit
        }, { setSubmitting, resetForm }) => {
          const payload: CapsuleSurfaceAreaI = {
            base_radius,
            base_radius_unit,
            height,
            height_unit,
            method: 'capsuleSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /* const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
            console.log('=====>', calsurfaceArea)
            if (typeof calsurfaceArea === 'object') {
              console.log(calsurfaceArea)
              setResult({
                surfaceArea: calsurfaceArea.surfaceAreas,
                Area: calsurfaceArea.Area
              })
            }
            resetForm() */
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <CustomForm
                label={LABELS.baseRadius}
                type={INPUT_TYPE.number}
                id="base_radius"
                placeholder={PLACEHOLDERS.number}
                value={values.base_radius}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="base_radius_unit"
                value={values.base_radius_unit}
                onChange={handleChange('base_radius_unit')}
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
              <Typography variant="subtitle1">Surface Area: {Result.surfaceArea}</Typography>
              <Typography variant="subtitle1"> Area: {Result.Area}</Typography>
            </div>

          </form>
        )}
      </Formik>
    </div>
  )
}

export default CapsuleSurfaceArea
