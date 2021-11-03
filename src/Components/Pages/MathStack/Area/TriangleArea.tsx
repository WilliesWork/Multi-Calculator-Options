import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { TriangleAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomForm, CustomSelect } from '../../../custom'

const TriangleArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    sideA: "",
    sideA_unit: "",
    sideB: "",
    sideB_unit: "",
    sideC: "",
    sideC_unit: "",
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.triangleArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          sideA,
          sideA_unit,
          sideB,
          sideB_unit,
          sideC,
          sideC_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: TriangleAreaI = {
            sideA,
            sideA_unit,
            sideB,
            sideB_unit,
            sideC,
            sideC_unit,
            // method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateTriangleArea(payload)
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
                label={LABELS.sideA}
                type={INPUT_TYPE.number}
                id="sideA"
                placeholder={PLACEHOLDERS.number}
                value={values.sideA}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="sideA_unit"
                value={values.sideA_unit}
                onChange={handleChange('sideA_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.sideB}
                type={INPUT_TYPE.number}
                id="sideB"
                placeholder={PLACEHOLDERS.number}
                value={values.sideB}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="sideB_unit"
                value={values.sideB_unit}
                onChange={handleChange('sideB_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.sideC}
                type={INPUT_TYPE.number}
                id="sideC"
                placeholder={PLACEHOLDERS.number}
                value={values.sideC}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="sideC_unit"
                value={values.sideC_unit}
                onChange={handleChange('sideC_unit')}
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
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default TriangleArea
