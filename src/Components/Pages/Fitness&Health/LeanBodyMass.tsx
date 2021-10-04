import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { LeanBodyMassI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'

const LeanBodyMass = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: '',
    gender: ''
  })
  const [Result, setResult] = React.useState({
    leanBodyMass: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.leanBodyMass}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit,
          gender
        }, { setSubmitting, resetForm }) => {
          const payload: LeanBodyMassI = {
            height,
            height_unit,
            weight,
            weight_unit,
            gender,
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

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="weight">{LABELS.weight}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="weight"
                  placeholder={PLACEHOLDERS.number}
                  value={values.weight}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="weight_unit">{LABELS.unit}</label>
                <select
                  id="weight_unit"
                  className="form-control"
                  value={values.weight_unit}
                  onChange={handleChange('weight_unit')}
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
                <label htmlFor="gender">{LABELS.gender}</label>
                <input
                  type={INPUT_TYPE.text}
                  className="form-control"
                  id="gender"
                  placeholder={PLACEHOLDERS.gender}
                  value={values.height}
                  onChange={handleChange}
                />
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
              <Typography variant="subtitle1">Lean Body Mass: {Result.leanBodyMass}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default LeanBodyMass
