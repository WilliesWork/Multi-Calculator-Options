import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'

import { CalculateSurfaceArea } from '../../../Services/AppCalculatorsApi'
import { EllipsoidSurfaceAreaI } from '../../../Types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import {
  CALCULATORS,
  BUTTONS,
  LABELS,
  PLACEHOLDERS,
  IDS,
  INPUT_TYPE
} from './../../../Common/shared'

const EllipsoidSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    axis1: '',
    axis1_unit: '',
    axis2: '',
    axis2_unit: '',
    axis3: '',
    axis3_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.ellipsoidSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          axis1,
          axis1_unit,
          axis2,
          axis2_unit,
          axis3,
          axis3_unit
        }, { setSubmitting, resetForm }) => {
          const payload: EllipsoidSurfaceAreaI = {
            axis1,
            axis1_unit,
            axis2,
            axis2_unit,
            axis3,
            axis3_unit,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /* const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
            console.log('=====>', calsurfaceArea)
            if (typeof calsurfaceArea === 'object') {
              console.log(calsurfaceArea)
              setResult({
                surfaceArea: calsurfaceArea.surfaceAreas,
                Area: calsurfaceArea.Area
              })
            }
            resetForm() */
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="axis1">{LABELS.axis1}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="axis1"
                  placeholder={PLACEHOLDERS.number}
                  value={values.axis1}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="axis1_unit">{LABELS.unit}</label>
                <select
                  id="axis1_unit"
                  className="form-control"
                  value={values.axis1_unit}
                  onChange={handleChange('axis1_unit')}
                >
                  <option selected>Select unit</option>
                  {Units.map(({ name, unit }) => (
                    <option
                      key={unit}
                      value={unit}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="axis2">{LABELS.axis2}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="axis2"
                  placeholder="0"
                  value={values.axis2}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="axis2_unit">{LABELS.unit}</label>
                <select
                  id="axis2_unit"
                  className="form-control"
                  value={values.axis2_unit}
                  onChange={handleChange('axis1_unit')}
                >
                  <option selected>Select unit</option>
                  {Units.map(({ name, unit }) => (
                    <option
                      key={unit}
                      value={unit}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="axis3">{LABELS.axis3}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="axis3"
                  placeholder="0"
                  value={values.axis3}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="axis3_unit">{LABELS.unit}</label>
                <select
                  id="axis3_unit"
                  className="form-control"
                  value={values.axis3_unit}
                  onChange={handleChange('axis3_unit')}
                >
                  <option selected>Select unit</option>
                  {Units.map(({ name, unit }) => (
                    <option
                      key={unit}
                      value={unit}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
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

export default EllipsoidSurfaceArea
