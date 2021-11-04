import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../../Services/AppCalculatorsApi'
import { EllipsoidSurfaceAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CustomForm, CustomSelect } from '../../../custom'
import {
  CALCULATORS,
  BUTTONS,
  LABELS,
  PLACEHOLDERS,
  IDS,
  INPUT_TYPE
} from '../../../../Common/shared'

const EllipsoidSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    axis1: '',
    axis1_unit: '',
    axis2: '',
    axis2_unit: '',
    axis3: '',
    axis3_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.ellipsoidSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          axis1,
          axis1_unit,
          axis2,
          axis2_unit,
          axis3,
          axis3_unit
        }, { setSubmitting, resetForm }) => {
          const payload: EllipsoidSurfaceAreaI = {
            axis1,
            axis1_unit,
            axis2,
            axis2_unit,
            axis3,
            axis3_unit,
            method: 'ballSurfaceAreaCalculator'
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
                label={LABELS.axis1}
                type={INPUT_TYPE.number}
                id="axis1"
                placeholder={PLACEHOLDERS.number}
                value={values.axis1}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="axis1_unit"
                value={values.axis1_unit}
                onChange={handleChange('axis1_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.axis2}
                type={INPUT_TYPE.number}
                id="axis2"
                placeholder={PLACEHOLDERS.number}
                value={values.axis2}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="axis2_unit"
                value={values.axis2_unit}
                onChange={handleChange('axis2_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.axis3}
                type={INPUT_TYPE.number}
                id="axis3"
                placeholder={PLACEHOLDERS.number}
                value={values.axis3}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="axis3_unit"
                value={values.axis3_unit}
                onChange={handleChange('axis3_unit')}
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

export default EllipsoidSurfaceArea
