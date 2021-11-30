import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { ParallelogramAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const ParallelogramArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    breadth: '',
    breadth_unit: '',
    height: '',
    height_unit: ''
  })
  const [Result, setResult] = React.useState({
    area: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.capsuleSurfArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          breadth,
          breadth_unit,
          height,
          height_unit
        }, { setSubmitting, resetForm }) => {
          const payload: ParallelogramAreaI = {
            breadth,
            breadth_unit,
            height,
            height_unit,
            method: 'parallelogramArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: parallelogramArea } = await calculateMath(payload)
            console.log('=====>', parallelogramArea)
            const { area, unit
            } = parallelogramArea
            if (typeof parallelogramArea === 'object') {
              setResult({
                area: area,
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
              <Label title={LABELS.breadth} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="breadth"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="breadth_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.height} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="height_unit"
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}{Result.unit}</Typography>
            </div>

          </form>
        )}
      </Formik>
    </div>
  )
}

export default ParallelogramArea
