import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { SectorAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const SectorArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    angle: "",
    angle_unit: "",
  })
  const [Result, setResult] = React.useState({
    area: 0,
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
            const { area, unit
            } = sectorArea
            if (typeof sectorArea === 'object') {
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
              <Label title={LABELS.radius} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="radius"
                placeholder={PLACEHOLDERS.number}
                value={values.radius}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="radius_unit"
                value={values.radius_unit}
                onChange={handleChange('radius_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.angle} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="angle"
                placeholder={PLACEHOLDERS.number}
                value={values.angle}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="angle_unit"
                value={values.angle_unit}
                onChange={handleChange('angle_unit')}
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

export default SectorArea
