import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { MarginErrorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from './../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../../../Common/shared'
import { calculateStatistics } from '../../../Services/AppCalculatorsApi'
import { CustomBtn, CustomForm, Label } from '../../custom'

const MarginOfErrorCalculator = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    confience_level: '',
    sample_size: '',
    population_proportion: ''
  })
  const [Result, setResult] = React.useState({
    marginOfError: 0,
    unit: ''
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
          confience_level,
          sample_size,
          population_proportion
        }, { setSubmitting, resetForm }) => {
          const payload: MarginErrorI = {
            confience_level,
            sample_size,
            population_proportion,
            method: 'FindOuttheMarginofError'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: marginOfErrorCalculator } = await calculateStatistics(payload)
            console.log('=====>', marginOfErrorCalculator)
            const { marginOfError, unit } = marginOfErrorCalculator
            if (typeof marginOfErrorCalculator === 'object') {
              setResult({
                marginOfError: marginOfError,
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
              <Label title={LABELS.populationProportion} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="population_proportion"
                placeholder={PLACEHOLDERS.number}
                value={values.population_proportion}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.sampleSize} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="sample_size"
                placeholder={PLACEHOLDERS.number}
                value={values.sample_size}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Margin of error: {Result.marginOfError}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default MarginOfErrorCalculator
