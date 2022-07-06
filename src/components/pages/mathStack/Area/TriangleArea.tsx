import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { TriangleAreaI } from '../../../../types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../services/AppCalculatorsApi'

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
    area: 0,
    sideA: 0,
    sideB: 0,
    sideC: 0,
    unit: ''
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
            method: 'TriangleArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: TriangleArea } = await calculateMath(payload)
            console.log('=====>', TriangleArea)
            const { area, unit, sideA, sideB, sideC
            } = TriangleArea
            if (typeof TriangleArea === 'object') {
              setResult({
                area: area,
                sideA: sideA,
                sideB: sideB,
                sideC: sideC,
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
              <Label title={LABELS.sideA} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="sideA"
                placeholder={PLACEHOLDERS.number}
                value={values.sideA}
                onChange={handleChange}
              />

              <CustomSelect
                id="sideA_unit"
                value={values.sideA_unit}
                onChange={handleChange('sideA_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.sideB} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="sideB"
                placeholder={PLACEHOLDERS.number}
                value={values.sideB}
                onChange={handleChange}
              />

              <CustomSelect
                id="sideB_unit"
                value={values.sideB_unit}
                onChange={handleChange('sideB_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.sideC} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="sideC"
                placeholder={PLACEHOLDERS.number}
                value={values.sideC}
                onChange={handleChange}
              />

              <CustomSelect
                id="sideC_unit"
                value={values.sideC_unit}
                onChange={handleChange('sideC_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}</Typography>
              <Typography variant="subtitle1"> Side A: {Result.sideA}</Typography>
              <Typography variant="subtitle1"> Side B: {Result.sideB}</Typography>
              <Typography variant="subtitle1"> Side C: {Result.sideC}</Typography>
              <Typography variant="subtitle1"> Unit: {Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default TriangleArea
