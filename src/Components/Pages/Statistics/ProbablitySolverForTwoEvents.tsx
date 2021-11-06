import React from 'react'
import { Formik } from 'formik'
import { Button, Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ProbablitySolverForTwoEventsI } from '../../../Types'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import CustomForm from '../../custom/CustomForm'

const ProbablitySolverForTwoEvents = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    probability_of_a: '',
    probability_of_b: '',
    probability_of_a_not_occuring: '',
    probability_of_b_not_occuring: '',
    probability_of_a_and_b_both_occuring: '',
    probability_that_a_or_b_or_both_occur: '',
    probability_that_a_or_b_occurs_but_not_both: '',
    probability_of_neither_a_nor_b_occuring: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.probablitySolverForTwoEvents}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          probability_of_a,
          probability_of_b,
          probability_of_a_not_occuring,
          probability_of_b_not_occuring,
          probability_of_a_and_b_both_occuring,
          probability_that_a_or_b_or_both_occur,
          probability_that_a_or_b_occurs_but_not_both,
          probability_of_neither_a_nor_b_occuring,
        }, { setSubmitting, resetForm }) => {
          const payload: ProbablitySolverForTwoEventsI = {
            probability_of_a,
            probability_of_b,
            probability_of_a_not_occuring,
            probability_of_b_not_occuring,
            probability_of_a_and_b_both_occuring,
            probability_that_a_or_b_or_both_occur,
            probability_that_a_or_b_occurs_but_not_both,
            probability_of_neither_a_nor_b_occuring,
            //  method: 'ProbablitySolverForTwoEvents'
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
              label={LABELS.probabilityOfA}
              type={INPUT_TYPE.number}
              id="probability_of_a"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_a}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityOfB}
              type={INPUT_TYPE.number}
              id="probability_of_b"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_b}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityOfANotOccuring}
              type={INPUT_TYPE.number}
              id="probability_of_a_not_occuring"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_a_not_occuring}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityOfBNotOccuring}
              type={INPUT_TYPE.number}
              id="probability_of_b_not_occuring"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_b_not_occuring}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityOfAAndBBothOccuring}
              type={INPUT_TYPE.number}
              id="probability_of_a_and_b_both_occuring"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_a_and_b_both_occuring}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityThatAOrBOrBothOccur}
              type={INPUT_TYPE.number}
              id="probability_that_a_or_b_or_both_occur"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_that_a_or_b_or_both_occur}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityThatAOrBOccursButNotBoth}
              type={INPUT_TYPE.number}
              id="probability_that_a_or_b_occurs_but_not_both"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_that_a_or_b_occurs_but_not_both}
              onChange={handleChange}
            />

            <CustomForm
              label={LABELS.probabilityOfNeitherANorBOccuring}
              type={INPUT_TYPE.number}
              id="probability_of_neither_a_nor_b_occuring"
              placeholder={PLACEHOLDERS.number}
              value={values.probability_of_neither_a_nor_b_occuring}
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

export default ProbablitySolverForTwoEvents
