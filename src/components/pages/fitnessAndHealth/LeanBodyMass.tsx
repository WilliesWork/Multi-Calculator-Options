import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { LeanBodyMassI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../services/AppCalculatorsApi'

const LeanBodyMass = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
              <Label title={LABELS.weight} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
                value={values.weight}
                onChange={handleChange}
              />

              <CustomSelect
                id="weight_unit"
                value={values.weight_unit}
                onChange={handleChange('weight_unit')}
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
              <Typography variant="subtitle1">Lean body mass: {Result.leanBodyMass}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default LeanBodyMass
