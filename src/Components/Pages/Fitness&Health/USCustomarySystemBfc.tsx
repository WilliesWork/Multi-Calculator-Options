import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { USCustomarySystemBfcI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

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
    bfc: 0
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
            method: 'USCustomarySystemBFP'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: usCustomarySystemBFC } = await calculateHealth(payload)
            console.log('=====>', usCustomarySystemBFC)
            if (typeof usCustomarySystemBFC === 'object') {
              const { bfc } = usCustomarySystemBFC
              setResult({
                bfc: bfc,
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
              <Label title={LABELS.height} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
                id="height_unit"
                value={values.height_unit}
                onChange={handleChange('height_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.neck} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="neck"
                placeholder={PLACEHOLDERS.number}
                value={values.neck}
                onChange={handleChange}
              />

              <CustomSelect
                id="neck_unit"
                value={values.neck_unit}
                onChange={handleChange('neck_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.hip} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="hip"
                placeholder={PLACEHOLDERS.number}
                value={values.hip}
                onChange={handleChange}
              />

              <CustomSelect
                id="hip_unit"
                value={values.hip_unit}
                onChange={handleChange('hip_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.waist} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="waist"
                placeholder={PLACEHOLDERS.number}
                value={values.waist}
                onChange={handleChange}
              />

              <CustomSelect
                id="waist_unit"
                value={values.waist_unit}
                onChange={handleChange('waist_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.abdomen} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="abdomen"
                placeholder={PLACEHOLDERS.number}
                value={values.abdomen}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.gender} />
              <CustomForm
                type={INPUT_TYPE.text}
                id="gender"
                placeholder={PLACEHOLDERS.gender}
                value={values.gender}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">BFC: {Result.bfc}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default USCustomarySystemBfc
