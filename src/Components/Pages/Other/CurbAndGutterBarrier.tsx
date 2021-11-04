import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { CurbAndGutterBarrierI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const CurbAndGutterBarrier = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    curb_depth: '',
    curb_depth_unit: '',
    curb_height: '',
    curb_height_unit: '',
    flag_thickness: '',
    flag_thickness_unit: '',
    gutter_width: '',
    gutter_width_unit: '',
    length: '',
    length_unit: '',
    quantity: '',
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.curbAndGutterBarrier}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          curb_depth,
          curb_depth_unit,
          curb_height,
          curb_height_unit,
          flag_thickness,
          flag_thickness_unit,
          gutter_width,
          gutter_width_unit,
          length,
          length_unit,
          quantity,
        }, { setSubmitting, resetForm }) => {
          const payload: CurbAndGutterBarrierI = {
            curb_depth,
            curb_depth_unit,
            curb_height,
            curb_height_unit,
            flag_thickness,
            flag_thickness_unit,
            gutter_width,
            gutter_width_unit,
            length,
            length_unit,
            quantity,
            // method: 'ballSurfaceAreaCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            // const { payload: calsurfaceArea } = await calculateCylinderVolume(payload)
            // console.log('=====>', calsurfaceArea)
            // if (typeof calsurfaceArea === 'object') {
            //   console.log(calsurfaceArea)
            //   setResult({
            //     surfaceArea: calsurfaceArea.surfaceAreas,
            //     Area: calsurfaceArea.Area
            //   })
            // }
            // resetForm()
          } catch (err) {
            console.log('====>', err)
          }
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="form-container">

            <div className="form-row">
              <CustomForm
                label={LABELS.curbDepth}
                type={INPUT_TYPE.number}
                id="curb_depth"
                placeholder={PLACEHOLDERS.number}
                value={values.curb_depth}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="curb_depth_unit"
                value={values.curb_depth_unit}
                onChange={handleChange('curb_depth_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.curbHeight}
                type={INPUT_TYPE.number}
                id="curb_height"
                placeholder={PLACEHOLDERS.number}
                value={values.curb_height}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="curb_height_unit"
                value={values.curb_height_unit}
                onChange={handleChange('curb_height_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.flagThickness}
                type={INPUT_TYPE.number}
                id="flag_thickness"
                placeholder={PLACEHOLDERS.number}
                value={values.flag_thickness}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="flag_thickness_unit"
                value={values.flag_thickness_unit}
                onChange={handleChange('flag_thickness_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.gutterWidth}
                type={INPUT_TYPE.number}
                id="gutter_width"
                placeholder={PLACEHOLDERS.number}
                value={values.gutter_width}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="gutter_width_unit"
                value={values.gutter_width_unit}
                onChange={handleChange('gutter_width_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.length}
                type={INPUT_TYPE.number}
                id="length"
                placeholder={PLACEHOLDERS.number}
                value={values.length}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="length_unit"
                value={values.length_unit}
                onChange={handleChange('length_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.quantity}
                type={INPUT_TYPE.number}
                id="quantity"
                placeholder={PLACEHOLDERS.number}
                value={values.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="form mb-3">
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                className="btn btn-primary"
              >
                {BUTTONS.calculate}
              </Button>
            </div>

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Answer: {Result.Answer}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default CurbAndGutterBarrier
