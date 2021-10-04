import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { ConicalFrustrumSurfaceAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'

const ConicalFrustrumSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    top_radius: '',
    top_radius_unit: '',
    bottom_radius: '',
    bottom_radius_unit: '',
    height: '',
    height_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.conicalFrustrumSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          top_radius,
          top_radius_unit,
          bottom_radius,
          bottom_radius_unit,
          height,
          height_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: ConicalFrustrumSurfaceAreaI = {
            top_radius,
            top_radius_unit,
            bottom_radius,
            bottom_radius_unit,
            height,
            height_unit,
            method: 'conicalFrustrumSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            /*  const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
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
                <label htmlFor="top_radius">{LABELS.topRadius}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="top_radius"
                  placeholder={PLACEHOLDERS.number}
                  value={values.top_radius}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="top_radius_unit">{LABELS.unit}</label>
                <select
                  id="top_radius_unit"
                  className="form-control"
                  value={values.top_radius_unit}
                  onChange={handleChange('top_radius_unit')}
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
                <label htmlFor="bottom_radius">{LABELS.bottomRadius}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="bottom_radius"
                  placeholder={PLACEHOLDERS.number}
                  value={values.bottom_radius}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="bottom_radius_unit">{LABELS.unit}</label>
                <select
                  id="bottom_radius_unit"
                  className="form-control"
                  value={values.bottom_radius_unit}
                  onChange={handleChange('bottom_radius_unit')}
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
                <label htmlFor="height">{LABELS.height}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="height"
                  placeholder={PLACEHOLDERS.number}
                  value={values.height}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="height_unit">{LABELS.unit}</label>
                <select
                  id="height_unit"
                  className="form-control"
                  value={values.height_unit}
                  onChange={handleChange('height_unit')}
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

export default ConicalFrustrumSurfaceArea
