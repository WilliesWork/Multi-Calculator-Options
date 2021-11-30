import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { InternationalSystemBfcI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const InternationalSystemBfc = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    neck: '',
    gender: '',
    hip: '',
    waist: '',
  })
  const [Result, setResult] = React.useState({
    bfc: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.internationalSystemBfc}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          neck,
          gender,
          hip,
          waist,
        }, { setSubmitting, resetForm }) => {
          const payload: InternationalSystemBfcI = {
            height,
            neck,
            gender,
            hip,
            waist,
            method: 'InternationalSystemUnitBFP'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: internationalSystemBFC } = await calculateHealth(payload)
            console.log('=====>', internationalSystemBFC)
            if (typeof internationalSystemBFC === 'object') {
              const { bfc } = internationalSystemBFC
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
            </div>

            <div className="form-row">
              <Label title={LABELS.neck} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="neck"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.hip} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="hip"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.waist} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="waist"
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

export default InternationalSystemBfc
