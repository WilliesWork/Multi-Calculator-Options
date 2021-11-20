import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { WholeBodyMassFormulaI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateHealth } from '../../../services/AppCalculatorsApi'

const WholeBodyMassFormula = () => {
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
              <CustomForm
                type={INPUT_TYPE.number}
                id="height"
                placeholder={PLACEHOLDERS.number}
                value={values.height}
                onChange={handleChange}
              />

              <CustomSelect
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
                id="weight_unit"
                value={values.weight_unit}
                onChange={handleChange('weight_unit')}
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
