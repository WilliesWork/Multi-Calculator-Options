import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BMRKatchMcArdleI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BMRKatchMcArdle = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    fat: '',
    weight: '',
    weight_unit: ''
  })
  const [Result, setResult] = React.useState({
    BMR: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bMRKatchMcArdle}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          fat,
          weight,
          weight_unit
        }, { setSubmitting, resetForm }) => {
          const payload: BMRKatchMcArdleI = {
            fat,
            weight,
            weight_unit,
            method: 'BMRKatchMcArdle'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: katchMcArdle } = await calculateHealth(payload)
            console.log('=====>', katchMcArdle)
            if (typeof katchMcArdle === 'object') {
              const { BMR, unit } = katchMcArdle
              setResult({
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
              <Label title={LABELS.fat} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="fat"
                placeholder={PLACEHOLDERS.number}
                value={values.fat}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.weight} />
              <CustomTextInput
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

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">BMR: {Result.BMR}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BMRKatchMcArdle
