import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { CapsuleVolumeCalculatorI } from '../../../../types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../common/shared'
import { CustomForm, CustomSelect, Figure, Label, CustomBtn } from '../../../custom'
import { calculateMath } from '../../../../services/AppCalculatorsApi'

const CapsuleVolume = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState({
    volumeInRadiusUnit: 0,
    volumeInHeightUnit: 0,
    radiusInheightUnit: 0,
    heightInradiusUnit: 0,
    submittedradius: 0,
    submitted_height: 0,
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.capsuleVol}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit,
          height,
          height_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: CapsuleVolumeCalculatorI = {
            radius,
            radius_unit,
            height,
            height_unit,
            method: 'CapsuleVolumeCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: capsuleVolume } = await calculateMath(payload)
            console.log('=====>', capsuleVolume)
            if (typeof capsuleVolume === 'object') {
              //For now only working if you use different units
              const { volumeInRadiusUnit,
                volumeInHeightUnit,
                radiusInheightUnit,
                heightInradiusUnit,
                submittedradius,
                submitted_height } = capsuleVolume
              setResult({
                volumeInHeightUnit: volumeInHeightUnit,
                volumeInRadiusUnit: volumeInRadiusUnit,
                radiusInheightUnit: radiusInheightUnit,
                submitted_height: submitted_height,
                submittedradius: submittedradius,
                heightInradiusUnit: heightInradiusUnit
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
            <Grid container xs>
              <Grid item xs={4}>
                <div className='form-row'>
                  <Figure />
                </div>
              </Grid>

              <Grid item xs>
                <div className="form-row">

                  <Label title={LABELS.radius} />

                  <CustomForm
                    type={INPUT_TYPE.number}
                    id="radius"
                    placeholder={PLACEHOLDERS.number}
                    value={values.radius}
                    onChange={handleChange}
                  />

                  <CustomSelect
                    id="radius_unit"
                    value={values.radius_unit}
                    onChange={handleChange('radius_unit')}
                  />
                </div>

                <div className="form-row">
                  <Label title={LABELS.height} />

                  <CustomForm
                    type={INPUT_TYPE.number}
                    id="height"
                    placeholder={PLACEHOLDERS.number}
                    value={values.height}
                    onChange={handleChange}
                  />

                  <CustomSelect
                    id="height_unit"
                    value={values.height_unit}
                    onChange={handleChange('height_unit')}
                  />
                </div>

                <CustomBtn />
              </Grid>
            </Grid>
            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Volume in Radius: {Result.volumeInRadiusUnit}</Typography>
              <Typography variant="subtitle1"> Volume in Height: {Result.volumeInHeightUnit}</Typography>
              <Typography variant="subtitle1"> Submitted Radius: {Result.submittedradius}</Typography>
              <Typography variant="subtitle1"> Submitted Height: {Result.submitted_height}</Typography>
              <Typography variant="subtitle1"> Radius in Height: {Result.radiusInheightUnit}</Typography>
              <Typography variant="subtitle1"> Height in Radius: {Result.heightInradiusUnit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CapsuleVolume
