import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { HoleColumnI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const HoleColumn = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    diameter: "",
    diameter_unit: "",
    height: "",
    height_unit: "",
    quantity: ""
  })
  const [Result, setResult] = React.useState({
    holeColumn: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.holeColumn}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          diameter,
          diameter_unit,
          height,
          height_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: HoleColumnI = {
            diameter,
            diameter_unit,
            height,
            height_unit,
            quantity,
            method: 'holeColumnOrRoundFootings'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: trapSpeedMethod } = await calculateOthers(payload)
            console.log('=====>', trapSpeedMethod)
            const { holeColumn, unit,
            } = trapSpeedMethod
            if (typeof trapSpeedMethod === 'object') {
              setResult({
                holeColumn: holeColumn,
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
              <Label title={LABELS.diameter} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="diameter"
                placeholder={PLACEHOLDERS.number}
                value={values.diameter}
                onChange={handleChange}
              />

              <CustomSelect
                measurement="length"
                id="diameter_unit"
                value={values.diameter_unit}
                onChange={handleChange('diameter_unit')}
              />
            </div>

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
              <Label title={LABELS.quantity} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="quantity"
                placeholder={PLACEHOLDERS.number}
                value={values.quantity}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Hole Column: {Result.holeColumn}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default HoleColumn
