import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { USCustomarySystemBfcI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const USCustomarySystemBfc = () => {
  const classes = useStyles()
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

            <div className="form-row">
              <Label title={LABELS.neck} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="neck"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="neck_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.hip} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="hip"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="hip_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.waist} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="waist"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="waist_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.abdomen} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="abdomen"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.gender} />
              <CustomTextInput
                type={INPUT_TYPE.text}
                id="gender"
                placeholder={PLACEHOLDERS.gender}
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
