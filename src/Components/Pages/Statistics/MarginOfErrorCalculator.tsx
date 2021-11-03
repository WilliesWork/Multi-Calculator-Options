import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../Services/AppCalculatorsApi'
import { MarginErrorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from './../../../Common/shared'

const MarginOfErrorCalculator = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    z_score: '',
    sample_size: '',
    standard_deviation: ''
  })
  const [Result, setResult] = React.useState({
    marginOfError: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.marginOfError}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          z_score,
          sample_size,
          standard_deviation
        }, { setSubmitting, resetForm }) => {
          const payload: MarginErrorI = {
            z_score,
            sample_size,
            standard_deviation,
            method: 'marginOfErrorCalculator'
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
                <label htmlFor="z_score">{LABELS.zScore}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="z_score"
                  placeholder={PLACEHOLDERS.number}
                  value={values.z_score}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="standard_deviation">{LABELS.standardDeviation}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="standard_deviation"
                  placeholder={PLACEHOLDERS.number}
                  value={values.standard_deviation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="sample_size">{LABELS.sampleSize}</label>
                <input
                  type={INPUT_TYPE.number}
                  className="form-control"
                  id="sample_size"
                  placeholder={PLACEHOLDERS.number}
                  value={values.sample_size}
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
              <Typography variant="subtitle1">Margin of Error: {Result.marginOfError}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default MarginOfErrorCalculator
