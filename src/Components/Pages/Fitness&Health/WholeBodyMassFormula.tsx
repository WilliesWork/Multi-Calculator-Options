import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { WholeBodyMassFormulaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const WholeBodyMassFormula = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: ''
  })
  const [Result, setResult] = React.useState({
    bodyMass: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.wholeBodyMassFormula}
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
          const payload: WholeBodyMassFormulaI = {
            height,
            height_unit,
            weight,
            weight_unit,
            method: 'allBodyMassFormulars'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: allBodyMassFormulas } = await calculateHealth(payload)
            console.log('=====>', allBodyMassFormulas)
            if (typeof allBodyMassFormulas === 'object') {
              const { bodyMass, unit } = allBodyMassFormulas
              setResult({
                bodyMass: bodyMass,
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
              <Typography variant="subtitle1">Body mass: {Result.bodyMass}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default WholeBodyMassFormula
