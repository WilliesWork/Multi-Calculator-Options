import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { ProbabilityOfASeriesOfIndpendentEventsI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateStatistics } from '../../../services/AppCalculatorsApi'

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
    probability: 0,
    unit: ''
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
            method: 'ProbabilityOfASeriesOfIndependentEvents'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: probabilityOfASeriesOfIndependentEvents } = await calculateStatistics(payload)
            console.log('=====>', probabilityOfASeriesOfIndependentEvents)
            if (typeof probabilityOfASeriesOfIndependentEvents === 'object') {
              const { probability, unit } = probabilityOfASeriesOfIndependentEvents
              setResult({
                probability: probability,
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
              <Label title={LABELS.eventA} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="event_a"
                placeholder={PLACEHOLDERS.number}
                value={values.event_a}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.aRepeatTimes} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="a_repeat_times"
                placeholder={PLACEHOLDERS.number}
                value={values.a_repeat_times}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.eventB} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="event_b"
                placeholder={PLACEHOLDERS.number}
                value={values.event_b}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.bRepeatTimes} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="b_repeat_times"
                placeholder={PLACEHOLDERS.number}
                value={values.b_repeat_times}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Probability: {Result.probability}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default ProbabilityOfASeriesOfIndpendentEvents
