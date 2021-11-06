import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { CircularSlapI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const CircularSlap = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    length: "",
    length_unit: "",
    outer_diameter: "",
    outer_diameter_unit: "",
    inner_diameter: "",
    inner_diameter_unit: "",
    quantity: ""
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.circularSlap}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          outer_diameter,
          outer_diameter_unit,
          inner_diameter,
          inner_diameter_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: CircularSlapI = {
            length,
            length_unit,
            outer_diameter,
            outer_diameter_unit,
            inner_diameter,
            inner_diameter_unit,
            quantity
            // method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateCylinderVolume(payload)
            // console.log('=====>', calsurfaceArea)
            // if (typeof calsurfaceArea === 'object') {
            //   console.log(calsurfaceArea)
            //   setResult({
            //     surfaceArea: calsurfaceArea.surfaceAreas,
            //     Area: calsurfaceArea.Area
            //   })
            // }
            // resetForm()
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <CustomForm
                label={LABELS.length}
                type={INPUT_TYPE.number}
                id="length"
                placeholder={PLACEHOLDERS.number}
                value={values.length}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="length_unit"
                value={values.length_unit}
                onChange={handleChange('length_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.outerDiameter}
                type={INPUT_TYPE.number}
                id="outer_diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.outer_diameter}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="outer_diameter_unit"
                value={values.outer_diameter_unit}
                onChange={handleChange('outer_diameter_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.innerDiameter}
                type={INPUT_TYPE.number}
                id="inner_diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.inner_diameter}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="inner_diameter_unit"
                value={values.inner_diameter_unit}
                onChange={handleChange('inner_diameter_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.quantity}
                type={INPUT_TYPE.number}
                id="quantity"
                placeholder={PLACEHOLDERS.number}
                value={values.quantity}
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
              <Typography variant="subtitle1"> Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CircularSlap
