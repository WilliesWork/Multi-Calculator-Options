// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'

import { CubeAreaI } from '../../../Types'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

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
              <CustomForm
                label={LABELS.edgeLength}
                type={INPUT_TYPE.number}
                id="edge_length"
                placeholder={PLACEHOLDERS.number}
                value={values.edge_length}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="edge_unit"
                value={values.edge_unit}
                onChange={handleChange('edge_unit')}
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
