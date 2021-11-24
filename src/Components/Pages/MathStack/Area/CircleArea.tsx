import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { CircleAreaI } from '../../../../Types'
import { selectCalculators } from '../../../../redux/slice/CalculatorsSlice'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const CircleArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
  })
  const [Result, setResult] = React.useState({
    area: 0,
    unit: '',
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.circleArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit
        }, { setSubmitting, resetForm }) => {
          const payload: CircleAreaI = {
            radius,
            radius_unit,
            method: 'circleArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: circleArea } = await calculateMath(payload)
            console.log('=====>', circleArea)
            if (typeof circleArea === 'object') {
              const { area, units } = circleArea
              setResult({
                area: area,
                unit: units,
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
              <Label title={LABELS.radius} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="radius"
                placeholder={PLACEHOLDERS.number}
                value={values.radius}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="radius_unit"
                value={values.radius_unit}
                onChange={handleChange('radius_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CircleArea
