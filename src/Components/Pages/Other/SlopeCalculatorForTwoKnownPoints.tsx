import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { SlopeCalculatorForTwoKnownPointsI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const SlopeCalculatorForTwoKnownPoints = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    y_1: '',
    y_2: '',
    x_1: '',
    x_2: '',
  })
  const [Result, setResult] = React.useState({
    slope: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.slopeCalculatorForTwoKnownPoints}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          y_1,
          y_2,
          x_1,
          x_2,
        }, { setSubmitting, resetForm }) => {
          const payload: SlopeCalculatorForTwoKnownPointsI = {
            y_1,
            y_2,
            x_1,
            x_2,
            method: 'IfThe2PointsAreKnownSlopeCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: slopeWithTwoKnownPoints } = await calculateOthers(payload)
            console.log('=====>', slopeWithTwoKnownPoints)
            const { slope, unit } = slopeWithTwoKnownPoints
            if (typeof slopeWithTwoKnownPoints === 'object') {
              setResult({
                slope: slope,
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
              <Label title={LABELS.x1} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="x_1"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.y1} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="y_1"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.x2} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="x_2"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.y2} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="y_2"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Slope: {Result.slope}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default SlopeCalculatorForTwoKnownPoints
