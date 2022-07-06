import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConductorResitorI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../services/AppCalculatorsApi'

const ConductorResitor = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    length: "",
    length_unit: "",
    diameter: "",
    diameter_unit: "",
    conductivity: ""
  })
  const [Result, setResult] = React.useState({
    resistance: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.conductorResitor}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          diameter,
          diameter_unit,
          conductivity,
        }, { setSubmitting, resetForm }) => {
          const payload: ConductorResitorI = {
            length,
            length_unit,
            diameter,
            diameter_unit,
            conductivity,
            method: 'ResistanceOfAConductor'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: resistanceOfAConductor } = await calculateOthers(payload)
            console.log('=====>', resistanceOfAConductor)
            const { resistance, unit,
            } = resistanceOfAConductor
            if (typeof resistanceOfAConductor === 'object') {
              setResult({
                resistance: resistance,
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
              <Label title={LABELS.length} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="length"
                placeholder={PLACEHOLDERS.number}
                value={values.length}
                onChange={handleChange}
              />

              <CustomSelect
                id="length_unit"
                value={values.length_unit}
                onChange={handleChange('length_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.diameter} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.diameter}
                onChange={handleChange}
              />

              <CustomSelect
                id="diameter_unit"
                value={values.diameter_unit}
                onChange={handleChange('diameter_unit')}
              />
            </div>


            <div className="form-row">
              <Label title={LABELS.conductivity} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="conductivity"
                placeholder={PLACEHOLDERS.number}
                value={values.conductivity}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Resistance: {Result.resistance}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConductorResitor
