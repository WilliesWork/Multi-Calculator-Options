import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { SampleSizeI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { calculateStatistics } from '../../../services/AppCalculatorsApi'
import { CustomBtn, Label, CustomForm } from '../../custom'

const SampleSizeCalculator = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    confience_level: '',
    population_proportion: '',
    margin_of_error: ''
  })
  const [Result, setResult] = React.useState({
    sampleSize: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.sampleSize}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          confience_level,
          population_proportion,
          margin_of_error
        }, { setSubmitting, resetForm }) => {
          const payload: SampleSizeI = {
            confience_level,
            population_proportion,
            margin_of_error,
            method: 'FindOutTheSampleSize'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: circularSlabOrTubeConcrete } = await calculateStatistics(payload)
            console.log('=====>', circularSlabOrTubeConcrete)
            const { sampleSize, unit } = circularSlabOrTubeConcrete
            if (typeof circularSlabOrTubeConcrete === 'object') {
              setResult({
                sampleSize: sampleSize,
                unit: unit
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
              <Label title={LABELS.confienceLevel} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="confience_level"
                placeholder={PLACEHOLDERS.number}
                value={values.confience_level}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.standardDeviation} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="population_proportion"
                placeholder={PLACEHOLDERS.number}
                value={values.population_proportion}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.marginOfError} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="margin_of_error"
                placeholder={PLACEHOLDERS.number}
                value={values.margin_of_error}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">
                Sample size: {Result.sampleSize}{Result.unit}
              </Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default SampleSizeCalculator
