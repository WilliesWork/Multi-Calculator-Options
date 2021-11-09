import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { EllipseAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomForm, CustomSelect } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const EllipseArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    semi_major_axes_a: "",
    semi_major_axes_a_unit: "",
    semi_major_axes_b: "",
    semi_major_axes_b_unit: "",
  })
  const [Result, setResult] = React.useState({
    Major_axes_a: 0,
    Major_axes_b: 0,
    Area: 0,
    units: ''
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
            const {area, units, submittedsemi_major_axes_a, submitted_semi_major_axes_b} = ellipseArea
            if (typeof ellipseArea === 'object') {
              setResult({
               Area: area,
               Major_axes_a: submittedsemi_major_axes_a,
               Major_axes_b: submitted_semi_major_axes_b,
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
                label={LABELS.semiMajorAxesA}
                type={INPUT_TYPE.number}
                id="semi_major_axes_a"
                placeholder={PLACEHOLDERS.number}
                value={values.semi_major_axes_a}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="semi_major_axes_a_unit"
                value={values.semi_major_axes_a_unit}
                onChange={handleChange('semi_major_axes_a_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.semiMajorAxesB}
                type={INPUT_TYPE.number}
                id="semi_major_axes_b"
                placeholder={PLACEHOLDERS.number}
                value={values.semi_major_axes_b}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="semi_major_axes_b_unit"
                value={values.semi_major_axes_b_unit}
                onChange={handleChange('semi_major_axes_b_unit')}
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
              <Typography variant="subtitle1"> Area: {Result.Area}</Typography>
              <Typography variant="subtitle1"> Major axes A: {Result.Major_axes_a}</Typography>
              <Typography variant="subtitle1"> Major axes B: {Result.Major_axes_b}</Typography>
              <Typography variant="subtitle1"> Units: {Result.units}</Typography>

            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default EllipseArea
