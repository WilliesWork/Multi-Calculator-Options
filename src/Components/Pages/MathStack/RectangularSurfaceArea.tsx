import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

// import { calculateRectangularArea } from '../../../Services/MathStack'
import { RectangularAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'
// import axios from 'axios'

const RectangularSurfaceArea = () => {
  const classes = useStyles();
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    length: '',
    length_unit: '',
    width: '',
    width_unit: '',
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
          {CALCULATORS.rectSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          width,
          width_unit,
          height,
          height_unit


        }, { setSubmitting, resetForm }) => {
          const payload: RectangularAreaI = {
            length,
            length_unit,
            width,
            width_unit,
            height,
            height_unit,
            method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateRectangularArea(payload)
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
              <div className="form-group col-8">
                <label htmlFor="length">{LABELS.length}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="length"
                  placeholder={PLACEHOLDERS.number}
                  value={values.length}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="length_units">{LABELS.unit}</label>
                <select
                  id="length_units"
                  className="form-control"
                  value={values.length_unit}
                  onChange={handleChange('length_units')}
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
                <label htmlFor="width">{LABELS.width}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="width"
                  placeholder={PLACEHOLDERS.number}
                  value={values.width}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="width_units">{LABELS.unit}</label>
                <select
                  id="width_units"
                  className="form-control"
                  value={values.width_unit}
                  onChange={handleChange('width_units')}
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
                <label htmlFor="length_units">{LABELS.unit}</label>
                <select
                  id="length_units"
                  className="form-control"
                  value={values.length_unit}
                  onChange={handleChange('lenght_units')}
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

export default RectangularSurfaceArea
