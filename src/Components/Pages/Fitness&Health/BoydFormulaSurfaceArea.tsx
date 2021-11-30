import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BoydFormulaSurfaceAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BoydFormulaSurfaceArea = () => {
  const classes = useStyles()
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
    unit: 0,
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.boydFormulaSurfaceArea}
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
          const payload: BoydFormulaSurfaceAreaI = {
            height,
            height_unit,
            weight,
            weight_unit,
            method: 'BoydFormulaBodySurfaceArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: boydFormula } = await calculateHealth(payload)
            console.log('=====>', boydFormula)
            if (typeof boydFormula === 'object') {
              const { weightInKg, heightToMeter, bsa, unit } = boydFormula
              setResult({
                bsa: bsa,
                heightToMeter: heightToMeter,
                weightInKg: weightInKg,
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

            <div className="form-row">
              <Label title={LABELS.weight} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="weight"
                id="weight_unit"
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Boyd formula surface area: {Result.bsa}{Result.unit}</Typography>
              <Typography variant="subtitle1">Weight: {Result.weightInKg}</Typography>
              <Typography variant="subtitle1">Height: {Result.heightToMeter}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BoydFormulaSurfaceArea
