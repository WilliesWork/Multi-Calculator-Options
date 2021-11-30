import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConductorResitorI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const ConductorResitor = () => {
  const classes = useStyles()
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
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="length"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="length_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.diameter} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="diameter"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="diameter_unit"
              />
            </div>


            <div className="form-row">
              <Label title={LABELS.conductivity} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="conductivity"
                placeholder={PLACEHOLDERS.number}
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
