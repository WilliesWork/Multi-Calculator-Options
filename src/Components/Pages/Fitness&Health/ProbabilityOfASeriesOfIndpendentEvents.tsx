import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { CalculateSurfaceArea } from '../../../Services/AppCalculatorsApi'
import { ProbabilityOfASeriesOfIndpendentEventsI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const ProbabilityOfASeriesOfIndpendentEvents = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    event_a: '',
    a_repeat_times: '',
    event_b: '',
    b_repeat_times: ''
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.probabilityOfASeriesOfIndpendentEvents}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          event_a,
          a_repeat_times,
          event_b,
          b_repeat_times
        }, { setSubmitting, resetForm }) => {
          const payload: ProbabilityOfASeriesOfIndpendentEventsI = {
            event_a,
            a_repeat_times,
            event_b,
            b_repeat_times,
            //  method: 'ballSurfaceAreaCalculator'
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
                label={LABELS.eventA}
                type={INPUT_TYPE.number}
                id="event_a"
                placeholder={PLACEHOLDERS.number}
                value={values.event_a}
                onChange={handleChange}
              />

              <CustomForm
                label={LABELS.aRepeatTimes}
                type={INPUT_TYPE.number}
                id="a_repeat_times"
                placeholder={PLACEHOLDERS.number}
                value={values.a_repeat_times}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.eventB}
                type={INPUT_TYPE.number}
                id="event_b"
                placeholder={PLACEHOLDERS.number}
                value={values.event_b}
                onChange={handleChange}
              />

              <CustomForm
                label={LABELS.bRepeatTimes}
                type={INPUT_TYPE.number}
                id="b_repeat_times"
                placeholder={PLACEHOLDERS.number}
                value={values.b_repeat_times}
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

export default ProbabilityOfASeriesOfIndpendentEvents
