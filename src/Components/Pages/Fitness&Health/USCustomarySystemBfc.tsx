import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { USCustomarySystemBfcI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const USCustomarySystemBfc = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    neck: '',
    neck_unit: '',
    hip: '',
    hip_unit: '',
    waist: '',
    waist_unit: '',
    abdomen: '',
    gender: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.usCustomarySystemBfc}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          neck,
          neck_unit,
          hip,
          hip_unit,
          waist,
          waist_unit,
          abdomen,
          gender,
        }, { setSubmitting, resetForm }) => {
          const payload: USCustomarySystemBfcI = {
            height,
            height_unit,
            neck,
            neck_unit,
            hip,
            hip_unit,
            waist,
            waist_unit,
            abdomen,
            gender,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /*  const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
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

            <div className="form-row">
              <CustomForm
                label={LABELS.neck}
                type={INPUT_TYPE.number}
                id="neck"
                placeholder={PLACEHOLDERS.number}
                value={values.neck}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="neck_unit"
                value={values.neck_unit}
                onChange={handleChange('neck_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.hip}
                type={INPUT_TYPE.number}
                id="hip"
                placeholder={PLACEHOLDERS.number}
                value={values.hip}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="hip_unit"
                value={values.hip_unit}
                onChange={handleChange('hip_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.waist}
                type={INPUT_TYPE.number}
                id="waist"
                placeholder={PLACEHOLDERS.number}
                value={values.waist}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="waist_unit"
                value={values.waist_unit}
                onChange={handleChange('waist_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.abdomen}
                type={INPUT_TYPE.number}
                id="abdomen"
                placeholder={PLACEHOLDERS.number}
                value={values.abdomen}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.gender}
                type={INPUT_TYPE.text}
                id="gender"
                placeholder={PLACEHOLDERS.gender}
                value={values.gender}
                onChange={handleChange}
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
              <Typography variant="subtitle1">Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default USCustomarySystemBfc
