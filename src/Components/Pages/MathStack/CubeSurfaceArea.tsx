// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'

import { CubeAreaI } from '../../../Types'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'

const CubeSurfaceArea = () => {
  const classes = useStyles();
  const [initialFormValues] = React.useState({
    edge_length: '',
    edge_unit: ''
  })
  const [Result, setResult] = React.useState({
    cubeSurfaceArea: 0,
    Area: 0
  })
  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.cubeSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          // eslint-disable-next-line camelcase
          edge_length,
          edge_unit

        }, { setSubmitting, resetForm }) => {
          const payload: CubeAreaI = {
            edge_length,
            edge_unit,
            method: 'cubeSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calculateCubeArea } = await CalculateCubeSurfaceArea(payload)
            // console.log('=====>', calculateCubeArea)
            // if (typeof calculateCubeArea === 'object') {
            //   console.log(calculateCubeArea)
            //   setResult({
            //     cubeSurfaceArea: calculateCubeArea.CubeSurfaceArea,
            //     Area: calculateCubeArea.Area
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
                <label htmlFor="edge_length">{LABELS.edgeLength}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="edge_length"
                  placeholder={PLACEHOLDERS.number}
                  value={values.edge_length}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label htmlFor="edge_unit">{LABELS.unit}</label>
                <select
                  id="edge_unit"
                  className="form-control"
                  value={values.edge_unit}
                  onChange={handleChange('edge_unit')}
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
              <Typography variant="subtitle1">Surface Area: {Result.cubeSurfaceArea}</Typography>
              <Typography variant="subtitle1"> Area: {Result.Area}</Typography>
            </div>

          </form>
        )}
      </Formik>
    </div>
  )
}

export default CubeSurfaceArea
