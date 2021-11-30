import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { RectangularAreaI } from '../../../../Types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../Services/AppCalculatorsApi'

const RectangularArea = () => {
  const classes = useStyles();
  const [initialFormValues] = React.useState({
    length: '',
    length_unit: '',
    width: '',
    width_unit: '',
    height: '',
    height_unit: ''
  })
  const [Result, setResult] = React.useState({
    area: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.rectangleArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          length,
          length_unit,
          width,
          width_unit,
          height,
          height_unit
        }, { setSubmitting, resetForm }) => {
          const payload: RectangularAreaI = {
            length,
            length_unit,
            width,
            width_unit,
            height,
            height_unit,
            method: 'rectangleArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: rectangleArea } = await calculateMath(payload)
            console.log('=====>', rectangleArea)
            const { area, unit
            } = rectangleArea
            if (typeof rectangleArea === 'object') {
              setResult({
                area: area,
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
              <Label title={LABELS.width} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="width"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="length"
                id="width_unit"
              />
            </div>

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


            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default RectangularArea
