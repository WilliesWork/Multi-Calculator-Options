import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { SlopeCalculatorForTwoKnownPointsI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const SlopeCalculatorForTwoKnownPoints = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    y_1: '',
    y_2: '',
    x_1: '',
    x_2: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.slopeCalculatorForTwoKnownPoints}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          y_1,
          y_2,
          x_1,
          x_2,
        }, { setSubmitting, resetForm }) => {
          const payload: SlopeCalculatorForTwoKnownPointsI = {
            y_1,
            y_2,
            x_1,
            x_2,
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
                label={LABELS.x1}
                type={INPUT_TYPE.number}
                id="x_1"
                placeholder={PLACEHOLDERS.number}
                value={values.x_1}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.y1}
                type={INPUT_TYPE.number}
                id="y_1"
                placeholder={PLACEHOLDERS.number}
                value={values.y_1}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.x2}
                type={INPUT_TYPE.number}
                id="x_2"
                placeholder={PLACEHOLDERS.number}
                value={values.x_2}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.y2}
                type={INPUT_TYPE.number}
                id="y_2"
                placeholder={PLACEHOLDERS.number}
                value={values.y_2}
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

export default SlopeCalculatorForTwoKnownPoints
