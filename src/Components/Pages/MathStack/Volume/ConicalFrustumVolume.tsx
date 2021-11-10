import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConicalFrustumVolumeI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomForm, CustomSelect } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const ConicalFrustumVolume = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    top_radius: "",
    top_radius_unit: "",
    bottom_radius: "",
    bottom_radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState({
    Volume: 0,
    topRadius: 0,
    bottomRadius: 0,
    height: 0,
    units: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.conicalFrustrumVol}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          top_radius,
          top_radius_unit,
          bottom_radius,
          bottom_radius_unit,
          height,
          height_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: ConicalFrustumVolumeI = {
            top_radius,
            top_radius_unit,
            bottom_radius,
            bottom_radius_unit,
            height,
            height_unit,
            method: 'ConicalFrustumVolumeCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: conicalFrustrumVolume } = await calculateMath(payload)
            console.log('=====>', conicalFrustrumVolume)
            const { volume, units, r, R, h } = conicalFrustrumVolume
            if (typeof conicalFrustrumVolume === 'object') {
              setResult({
                Volume: volume,
                topRadius: R,
                bottomRadius: R,
                height: h,
                units: units
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
              <CustomForm
                label={LABELS.topRadius}
                type={INPUT_TYPE.number}
                id="top_radius"
                placeholder={PLACEHOLDERS.number}
                value={values.top_radius}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="top_radius_unit"
                value={values.top_radius_unit}
                onChange={handleChange('top_radius_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.bottomRadius}
                type={INPUT_TYPE.number}
                id="bottom_radius"
                placeholder={PLACEHOLDERS.number}
                value={values.bottom_radius}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="bottom_radius_unit"
                value={values.bottom_radius_unit}
                onChange={handleChange('bottom_radius_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.height}
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="height_unit"
                value={values.height_unit}
                onChange={handleChange('height_unit')}
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
              <Typography variant="subtitle1"> Volume: {Result.Volume}</Typography>
              <Typography variant="subtitle1"> Top Radius: {Result.topRadius}</Typography>
              <Typography variant="subtitle1"> Bottom Radius: {Result.bottomRadius}</Typography>
              <Typography variant="subtitle1"> Height: {Result.height}</Typography>
              <Typography variant="subtitle1"> Units : {Result.units}</Typography>

            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConicalFrustumVolume
