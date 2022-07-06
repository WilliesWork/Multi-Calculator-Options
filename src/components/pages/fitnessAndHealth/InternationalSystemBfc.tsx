import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { InternationalSystemBfcI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../services/AppCalculatorsApi'

const InternationalSystemBfc = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
              <CustomForm
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
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

export default InternationalSystemBfc
