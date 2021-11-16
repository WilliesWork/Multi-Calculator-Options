import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { DueDateNaegeleRuleI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const DueDateNaegeleRule = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    first_date_of_last_period: '',
    days: '',
    method: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.dueDateNaegeleRule}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          first_date_of_last_period,
          days,
          method,
        }, { setSubmitting, resetForm }) => {
          const payload: DueDateNaegeleRuleI = {
            first_date_of_last_period,
            days,
            method: 'ballSurfaceAreaCalculator'
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
              <CustomForm
                label={LABELS.firstDateofLastPeriod}
                type={INPUT_TYPE.date}
                id="first_date_of_last_period"
                placeholder={PLACEHOLDERS.number}
                value={values.first_date_of_last_period}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.days}
                type={INPUT_TYPE.number}
                id="days"
                placeholder={PLACEHOLDERS.number}
                value={values.days}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.method}
                type={INPUT_TYPE.text}
                id="method"
                placeholder={PLACEHOLDERS.method}
                value={values.method}
                onChange={handleChange}
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
              <Typography variant="subtitle1">Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default DueDateNaegeleRule
