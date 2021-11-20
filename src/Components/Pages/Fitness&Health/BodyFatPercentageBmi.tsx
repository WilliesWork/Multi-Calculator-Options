import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BodyFatPercentageBmiI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BodyFatPercentageBmi = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: '',
    gender: '',
    age: '',
  })
  const [Result, setResult] = React.useState({
    BFI: 0,
    BMI: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bodyFatPercentageBmi}
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
          age,
        }, { setSubmitting, resetForm }) => {
          const payload: BodyFatPercentageBmiI = {
            height,
            height_unit,
            weight,
            weight_unit,
            gender,
            age,
            method: 'BodyMassIndexBFP'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: BodyFatPercentage } = await calculateHealth(payload)
            console.log('=====>', BodyFatPercentage)
            if (typeof BodyFatPercentage === 'object') {
              const { BMI, BFI } = BodyFatPercentage
              setResult({
                BMI: BMI,
                BFI: BFI
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
                measurement="length"
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
                measurement="weight"
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
              <Typography variant="subtitle1">BFI: {Result.BFI}</Typography>
              <Typography variant="subtitle1">BMI: {Result.BMI}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BodyFatPercentageBmi
