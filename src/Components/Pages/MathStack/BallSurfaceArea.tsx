// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { SurfaceAreaI } from '../../../Types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'
// import axios from 'axios'

const BallSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: '',
    radius_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.ballSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit
        }, { setSubmitting, resetForm }) => {
          const payload: SurfaceAreaI = {
            radius,
            radius_unit,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
            console.log('=====>', calsurfaceArea)
            if (typeof calsurfaceArea === 'object') {
              console.log(calsurfaceArea)
              setResult({
                surfaceArea: calsurfaceArea.surfaceAreas,
                Area: calsurfaceArea.Area
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
                label={LABELS.radius}
                type={INPUT_TYPE.number}
                id="radius"
                placeholder={PLACEHOLDERS.number}
                value={values.radius}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="radius_unit"
                value={values.radius_unit}
                onChange={handleChange('radius_unit')}
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
              <Typography variant="subtitle1">Surface Area: {Result.surfaceArea}</Typography>
              <Typography variant="subtitle1"> Area: {Result.Area}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BallSurfaceArea
