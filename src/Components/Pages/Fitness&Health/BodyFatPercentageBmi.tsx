import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BodyFatPercentageBmiI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BodyFatPercentageBmi = () => {
  const classes = useStyles()
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

            <div className="form-row">
              <Label title={LABELS.age} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="age"
                placeholder={PLACEHOLDERS.number}
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
