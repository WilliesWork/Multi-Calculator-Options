import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { EllipsoidVolumeCalculatorI } from '../../../../types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../services/AppCalculatorsApi'

const EllipsoidVolume = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    axis1: "",
    axis1_unit: "",
    axis2: "",
    axis2_unit: "",
    axis3: "",
    axis3_unit: "",
  })
  const [Result, setResult] = React.useState({
    Volume: 0,
    submitted_axis3: 0,
    submitted_axis2: 0,
    submitted_axis1: 0,
    units: '',
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.ellipsoidVol}
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
          axis3_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: EllipsoidVolumeCalculatorI = {
            axis1,
            axis1_unit,
            axis2,
            axis2_unit,
            axis3,
            axis3_unit,
            method: 'EllipsoidVolumeCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: ellipsoidVolume } = await calculateMath(payload)
            console.log('=====>', ellipsoidVolume)
            const { volume, units, submittedaxis1, submitted_axis2, submitted_axis3 } = ellipsoidVolume
            if (typeof ellipsoidVolume === 'object') {
              setResult({
                Volume: volume,
                submitted_axis1: submittedaxis1,
                submitted_axis2: submitted_axis2,
                submitted_axis3: submitted_axis3,
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
              <Label title={LABELS.axis1} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="axis1"
                placeholder={PLACEHOLDERS.number}
                value={values.axis1}
                onChange={handleChange}
              />

              <CustomSelect
                id="axis1_unit"
                value={values.axis1_unit}
                onChange={handleChange('axis1_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.axis2} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="axis2"
                placeholder={PLACEHOLDERS.number}
                value={values.axis2}
                onChange={handleChange}
              />

              <CustomSelect
                id="axis2_unit"
                value={values.axis2_unit}
                onChange={handleChange('axis2_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.axis3} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="axis3"
                placeholder={PLACEHOLDERS.number}
                value={values.axis3}
                onChange={handleChange}
              />

              <CustomSelect
                id="axis3_unit"
                value={values.axis3_unit}
                onChange={handleChange('axis3_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Volume: {Result.Volume}</Typography>
              <Typography variant="subtitle1"> Submitted axis 1: {Result.submitted_axis1}</Typography>
              <Typography variant="subtitle1"> Submitted axis 2: {Result.submitted_axis2}</Typography>
              <Typography variant="subtitle1"> Submitted axis 3: {Result.submitted_axis3}</Typography>
              <Typography variant="subtitle1"> units: {Result.units}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default EllipsoidVolume
