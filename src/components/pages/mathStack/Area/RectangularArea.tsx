import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { RectangularAreaI } from '../../../../types'
import { RootState } from '../../../../redux/store'
import useStyles from '../../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../../custom'
import { calculateMath } from '../../../../services/AppCalculatorsApi'

const RectangularArea = () => {
  const classes = useStyles();
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
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
    length: 0,
    width: 0,
    height: 0,
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
            const { area, unit, length, width, height
            } = rectangleArea
            if (typeof rectangleArea === 'object') {
              setResult({
                area: area,
                length: length,
                width: width,
                height: height,
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


            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Area: {Result.area}</Typography>
              <Typography variant="subtitle1"> Length: {Result.length}</Typography>
              <Typography variant="subtitle1"> Width: {Result.width}</Typography>
              <Typography variant="subtitle1"> Height: {Result.height}</Typography>
              <Typography variant="subtitle1"> Unit: {Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default RectangularArea
