import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { HoleColumnI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const HoleColumn = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    diameter: "",
    diameter_unit: "",
    height: "",
    height_unit: "",
    quantity: ""
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.holeColumn}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          diameter,
          diameter_unit,
          height,
          height_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: HoleColumnI = {
            diameter,
            diameter_unit,
            height,
            height_unit,
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
                label={LABELS.diameter}
                type={INPUT_TYPE.number}
                id="diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.diameter}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="diameter_unit"
                value={values.diameter_unit}
                onChange={handleChange('diameter_unit')}
              />
            </div>

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

export default HoleColumn
