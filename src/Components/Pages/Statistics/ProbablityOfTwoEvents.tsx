import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { ProbablityOfTwoEventsI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import CustomForm from '../../custom/CustomForm'

const ProbablityOfTwoEvents = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    event_a: '',
    event_b: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.probablityOfTwoEvents}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          event_a,
          event_b,
        }, { setSubmitting, resetForm }) => {
          const payload: ProbablityOfTwoEventsI = {
            event_a,
            event_b,
            //  method: 'ProbablityOfTwoEvents'
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

            <CustomForm
              label={LABELS.eventA}
              type={INPUT_TYPE.number}
              id="event_a"
              placeholder={PLACEHOLDERS.number}
              value={values.event_a}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.eventB}
              type={INPUT_TYPE.number}
              id="event_b"
              placeholder={PLACEHOLDERS.number}
              value={values.event_b}
              onChange={handleChange}
            />


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

export default ProbablityOfTwoEvents
