import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { LeanBodyMassI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const LeanBodyMass = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: '',
    gender: ''
  })
  const [Result, setResult] = React.useState({
    leanBodyMass: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.leanBodyMass}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit,
          gender
        }, { setSubmitting, resetForm }) => {
          const payload: LeanBodyMassI = {
            height,
            height_unit,
            weight,
            weight_unit,
            gender,
            method: 'LeanBodyMass'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: leanBodyMassFormula } = await calculateHealth(payload)
            console.log('=====>', leanBodyMassFormula)
            if (typeof leanBodyMassFormula === 'object') {
              const { leanBodyMass } = leanBodyMassFormula
              setResult({
                leanBodyMass: leanBodyMass,
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
              <Label title={LABELS.weight} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="weight"
                id="weight_unit"
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
              <Typography variant="subtitle1">Lean body mass: {Result.leanBodyMass}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default LeanBodyMass
