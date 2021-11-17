import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BmrMifflinJeorEquationI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

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
    BMR: 0
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
              const { step1, step2, step3, BMR } = MifflinJeor
              setResult({
                step1: step1,
                step2: step2,
                step3: step3,
                BMR: BMR
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
                label={LABELS.weight}
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
                value={values.weight}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="weight_unit"
                value={values.weight_unit}
                onChange={handleChange('weight_unit')}
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

            <div className="form-row">
              <CustomForm
                label={LABELS.age}
                type={INPUT_TYPE.number}
                id="age"
                placeholder={PLACEHOLDERS.number}
                value={values.age}
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
              <Typography variant="subtitle1">step1:{Result.step1} </Typography>
              <Typography variant="subtitle1">step2: {Result.step2}</Typography>
              <Typography variant="subtitle1">step3: {Result.step3}</Typography>
              <Typography variant="subtitle1">BMR: {Result.BMR}</Typography>

            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BmrMifflinJeorEquation
