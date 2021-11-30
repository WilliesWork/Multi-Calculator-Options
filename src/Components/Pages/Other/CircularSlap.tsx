import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { CircularSlapI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const CircularSlap = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    length: "",
    length_unit: "",
    outer_diameter: "",
    outer_diameter_unit: "",
    inner_diameter: "",
    inner_diameter_unit: "",
    quantity: ""
  })
  const [Result, setResult] = React.useState({
    concreteNeeded: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.circularSlap}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          outer_diameter,
          outer_diameter_unit,
          inner_diameter,
          inner_diameter_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: CircularSlapI = {
            length,
            length_unit,
            outer_diameter,
            outer_diameter_unit,
            inner_diameter,
            inner_diameter_unit,
            quantity,
            method: 'CircularSlabOrTubeConcreteCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: circularSlabOrTubeConcrete } = await calculateOthers(payload)
            console.log('=====>', circularSlabOrTubeConcrete)
            const { concreteNeeded, unit } = circularSlabOrTubeConcrete
            if (typeof circularSlabOrTubeConcrete === 'object') {
              setResult({
                concreteNeeded: concreteNeeded,
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
              <Label title={LABELS.outerDiameter} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="outer_diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.outer_diameter}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="outer_diameter_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.innerDiameter} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="inner_diameter"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="inner_diameter_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.quantity} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="quantity"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Amount of concrete needed: {Result.concreteNeeded}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CircularSlap
