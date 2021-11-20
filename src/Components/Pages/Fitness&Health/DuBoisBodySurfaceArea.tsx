import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { DuBoisBodySurfaceAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const DuBoisBodySurfaceArea = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: ''
  })
  const [Result, setResult] = React.useState({
    weightInKg: 0,
    heightToMeter: 0,
    bsa: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.duBoisBodySurfaceArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit
        }, { setSubmitting, resetForm }) => {
          const payload: DuBoisBodySurfaceAreaI = {
            height,
            height_unit,
            weight,
            weight_unit,
            method: 'DuBoisFormulaBodySurfaceArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: duboisFormula } = await calculateHealth(payload)
            console.log('=====>', duboisFormula)
            if (typeof duboisFormula === 'object') {
              const { weightInKg, heightToMeter, bsa, unit } = duboisFormula
              setResult({
                weightInKg: weightInKg,
                heightToMeter: heightToMeter,
                bsa: bsa,
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
              <Label title={LABELS.height} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="height_unit"
                value={values.height_unit}
                onChange={handleChange('height_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.weight} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
                value={values.weight}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="weight"
                id="weight_unit"
                value={values.weight_unit}
                onChange={handleChange('weight_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Body surface area: {Result.bsa}{Result.unit}</Typography>
              <Typography variant="subtitle1">Weight: {Result.weightInKg} </Typography>
              <Typography variant="subtitle1">Height: {Result.heightToMeter} </Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default DuBoisBodySurfaceArea
