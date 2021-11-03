import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'

import { CalculateSurfaceArea } from '../../../Services/AppCalculatorsApi'
import { SquarePyramidSurfaceAreaI } from '../../../Types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'

const SquarePyramidSurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    base_edge: '',
    base_edge_unit: '',
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
          {CALCULATORS.squarePyramidSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          base_edge,
          base_edge_unit,
          height,
          height_unit
        }, { setSubmitting, resetForm }) => {
          const payload: SquarePyramidSurfaceAreaI = {
            base_edge,
            base_edge_unit,
            height,
            height_unit,
            method: 'sqaurePyramidSurfaceAreaCalculator'
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
                <label htmlFor="base_edge">{LABELS.baseEdge}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="base_edge"
                  placeholder={PLACEHOLDERS.number}
                  value={values.base_edge}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="base_edge_unit">{LABELS.unit}</label>
                <select
                  id="base_edge_unit"
                  className="form-control"
                  value={values.base_edge_unit}
                  onChange={handleChange('base_edge_unit')}
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

export default SquarePyramidSurfaceArea
