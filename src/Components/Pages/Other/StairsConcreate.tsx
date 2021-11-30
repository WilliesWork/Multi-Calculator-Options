import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { StairsConcreateI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const StairsConcreate = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    run: '',
    run_unit: '',
    rise: '',
    rise_unit: '',
    width: '',
    width_unit: '',
    platform_depth: '',
    platform_depth_unit: '',
    steps: '',
  })
  const [Result, setResult] = React.useState({
    concreteNeeded: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.stairsConcrete}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          run,
          run_unit,
          rise,
          rise_unit,
          width,
          width_unit,
          platform_depth,
          platform_depth_unit,
          steps,
        }, { setSubmitting, resetForm }) => {
          const payload: StairsConcreateI = {
            run,
            run_unit,
            rise,
            rise_unit,
            width,
            width_unit,
            platform_depth,
            platform_depth_unit,
            steps,
            method: 'StairsConcreteCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: stairsConcreteMethod } = await calculateOthers(payload)
            console.log('=====>', stairsConcreteMethod)
            const { concreteNeeded, unit, run, rise, width, platform_depth, steps
            } = stairsConcreteMethod
            if (typeof stairsConcreteMethod === 'object') {
              setResult({
                concreteNeeded: concreteNeeded,
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
              <Label title={LABELS.run} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="run"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="run_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.rise} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="rise"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="rise_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.width} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="width"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="width_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.platformDepth} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="platform_depth"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="platform_depth_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.steps} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="steps"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">
                Amount of concrete needed: {Result.concreteNeeded}{Result.unit}
              </Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default StairsConcreate
