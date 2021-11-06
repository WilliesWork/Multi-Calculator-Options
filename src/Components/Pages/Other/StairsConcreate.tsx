import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { StairsConcreateI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const StairsConcreate = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
    Answer: 0
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
            // method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateCylinderVolume(payload)
            // console.log('=====>', calsurfaceArea)
            // if (typeof calsurfaceArea === 'object') {
            //   console.log(calsurfaceArea)
            //   setResult({
            //     surfaceArea: calsurfaceArea.surfaceAreas,
            //     Area: calsurfaceArea.Area
            //   })
            // }
            // resetForm()
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-row">
              <CustomForm
                label={LABELS.run}
                type={INPUT_TYPE.number}
                id="run"
                placeholder={PLACEHOLDERS.number}
                value={values.run}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="run_unit"
                value={values.run_unit}
                onChange={handleChange('run_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.rise}
                type={INPUT_TYPE.number}
                id="rise"
                placeholder={PLACEHOLDERS.number}
                value={values.rise}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="rise_unit"
                value={values.rise_unit}
                onChange={handleChange('rise_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.width}
                type={INPUT_TYPE.number}
                id="width"
                placeholder={PLACEHOLDERS.number}
                value={values.width}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="width_unit"
                value={values.width_unit}
                onChange={handleChange('width_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.platformDepth}
                type={INPUT_TYPE.number}
                id="platform_depth"
                placeholder={PLACEHOLDERS.number}
                value={values.platform_depth}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="platform_depth_unit"
                value={values.platform_depth_unit}
                onChange={handleChange('platform_depth_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.steps}
                type={INPUT_TYPE.number}
                id="steps"
                placeholder={PLACEHOLDERS.number}
                value={values.steps}
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
              <Typography variant="subtitle1"> Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default StairsConcreate
