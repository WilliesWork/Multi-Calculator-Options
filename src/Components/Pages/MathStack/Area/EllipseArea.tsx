import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { EllipseAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'


const EllipseArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    semi_major_axes_a: "",
    semi_major_axes_a_unit: "",
    semi_major_axes_b: "",
    semi_major_axes_b_unit: "",
  })
  const [Result, setResult] = React.useState({
    area: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.ellipseArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          semi_major_axes_a,
          semi_major_axes_a_unit,
          semi_major_axes_b,
          semi_major_axes_b_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: EllipseAreaI = {
            semi_major_axes_a,
            semi_major_axes_a_unit,
            semi_major_axes_b,
            semi_major_axes_b_unit,
            method: 'ellipseArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: ellipseArea } = await calculateMath(payload)
            console.log('=====>', ellipseArea)
            const { area, unit
            } = ellipseArea
            if (typeof ellipseArea === 'object') {
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
              <Label title={LABELS.semiMajorAxesA} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="semi_major_axes_a"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="semi_major_axes_a_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.semiMajorAxesB} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="semi_major_axes_b"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="semi_major_axes_b_unit"
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Area: {Result.area}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default EllipseArea
