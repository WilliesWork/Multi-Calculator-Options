import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { SectorAreaI } from '../../../../types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../services/AppCalculatorsApi'

const SectorArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    angle: "",
    angle_unit: "",
  })
  const [Result, setResult] = React.useState({
    area: 0,
    radius: 0,
    angle: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.sectorArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          radius,
          radius_unit,
          angle,
          angle_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: SectorAreaI = {
            radius,
            radius_unit,
            angle,
            angle_unit,
            method: 'sectorArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: sectorArea } = await calculateMath(payload)
            console.log('=====>', sectorArea)
            const { area, unit, radius, angle
            } = sectorArea
            if (typeof sectorArea === 'object') {
              setResult({
                area: area,
                radius: radius,
                angle: angle,
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
              <Label title={LABELS.angle} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="angle"
                placeholder={PLACEHOLDERS.number}
                value={values.angle}
                onChange={handleChange}
              />

              <CustomSelect
                id="angle_unit"
                value={values.angle_unit}
                onChange={handleChange('angle_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}</Typography>
              <Typography variant="subtitle1"> Radius: {Result.radius}</Typography>
              <Typography variant="subtitle1"> Angle: {Result.angle}</Typography>
              <Typography variant="subtitle1"> Unit: {Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default SectorArea
