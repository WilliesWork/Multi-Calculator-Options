import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BmrMifflinJeorEquationI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../services/AppCalculatorsApi'

const BmrMifflinJeorEquation = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: '',
    gender: '',
    age: 0
  })
  const [Result, setResult] = React.useState({
    step1: 0,
    step2: 0,
    step3: 0,
    BMR: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bmrMifflinJeorEquation}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit,
          gender,
          age
        }, { setSubmitting, resetForm }) => {
          const payload: BmrMifflinJeorEquationI = {
            height,
            height_unit,
            weight,
            weight_unit,
            gender,
            age,
            method: 'BMRMifflinStJeor'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: MifflinJeor } = await calculateHealth(payload)
            console.log('=====>', MifflinJeor)
            if (typeof MifflinJeor === 'object') {
              const { step1, step2, step3, BMR, unit } = MifflinJeor
              setResult({
                step1: step1,
                step2: step2,
                step3: step3,
                BMR: BMR,
                unit: unit
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

            <div className="form-row">
              <Label title={LABELS.age} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="age"
                placeholder={PLACEHOLDERS.number}
                value={values.age}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">step1:{Result.step1} </Typography>
              <Typography variant="subtitle1">step2: {Result.step2}</Typography>
              <Typography variant="subtitle1">step3: {Result.step3}</Typography>
              <Typography variant="subtitle1">BMR: {Result.BMR}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BmrMifflinJeorEquation
