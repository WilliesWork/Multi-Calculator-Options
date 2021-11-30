import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BodyMassIndexMethodTwoI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BodyMassIndexMethodTwo = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: ''
  })
  const [Result, setResult] = React.useState({
    weightInlbs: 0,
    heightToIn: 0,
    bmi: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bodyMassIndexMethodTwo}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit
        }, { setSubmitting, resetForm }) => {
          const payload: BodyMassIndexMethodTwoI = {
            height,
            height_unit,
            weight,
            weight_unit,
            method: 'bodyMassIndexTwo'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: bodyMassTwo } = await calculateHealth(payload)
            console.log('=====>', bodyMassTwo)
            if (typeof bodyMassTwo === 'object') {
              const { bmi, unit, heightToIn, weightInlbs } = bodyMassTwo
              setResult({
                bmi: bmi,
                heightToIn: heightToIn,
                weightInlbs: weightInlbs,
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

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">BMI:{Result.bmi}{Result.unit} </Typography>
              <Typography variant="subtitle1">Height:{Result.heightToIn} </Typography>
              <Typography variant="subtitle1">Weight:{Result.weightInlbs} </Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BodyMassIndexMethodTwo
