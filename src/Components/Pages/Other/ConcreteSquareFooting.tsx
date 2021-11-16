import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { ConcreteSquareFootingI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const ConcreteSquareFooting = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    length: "",
    length_unit: "",
    width: "",
    width_unit: "",
    breadth: "",
    breadth_unit: "",
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
          {CALCULATORS.concreteSquareFooting}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          width,
          width_unit,
          breadth,
          breadth_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: ConcreteSquareFootingI = {
            length,
            length_unit,
            width,
            width_unit,
            breadth,
            breadth_unit,
            quantity,
            method: 'SlabsSquareFootingsOrWallsConcreteCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: slabsSquareFootingsOrWallsConcreteCalculator } = await calculateOthers(payload)
            console.log('=====>', slabsSquareFootingsOrWallsConcreteCalculator)
            const { concreteNeeded, unit } = slabsSquareFootingsOrWallsConcreteCalculator
            if (typeof slabsSquareFootingsOrWallsConcreteCalculator === 'object') {
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
              <Label title={LABELS.width} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="width"
                placeholder={PLACEHOLDERS.number}
                value={values.width}
                onChange={handleChange}
              />

              <CustomSelect
                id="width_unit"
                value={values.width_unit}
                onChange={handleChange('width_unit')}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.breadth} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="breadth"
                placeholder={PLACEHOLDERS.number}
                value={values.breadth}
                onChange={handleChange}
              />

              <CustomSelect
                id="breadth_unit"
                value={values.breadth_unit}
                onChange={handleChange('breadth_unit')}
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
              <Typography variant="subtitle1"> Amount of concrete needed: {Result.concreteNeeded}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default ConcreteSquareFooting
