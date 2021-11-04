import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { WebsiteBandwidthI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const WebsiteBandwidth = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    page_views: "",
    page_views_unit: "",
    page_size: "",
    page_size_unit: "",
    redundancy_factor: ""
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.websiteBandwidth}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          page_views,
          page_views_unit,
          page_size,
          page_size_unit,
          redundancy_factor,
        }, { setSubmitting, resetForm }) => {
          const payload: WebsiteBandwidthI = {
            page_views,
            page_views_unit,
            page_size,
            page_size_unit,
            redundancy_factor
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
                label={LABELS.pageViews}
                type={INPUT_TYPE.number}
                id="page_views"
                placeholder={PLACEHOLDERS.number}
                value={values.page_views}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="page_views_unit"
                value={values.page_views_unit}
                onChange={handleChange('page_views_unit')}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.pageSize}
                type={INPUT_TYPE.number}
                id="page_size"
                placeholder={PLACEHOLDERS.number}
                value={values.page_size}
                onChange={handleChange}
              />

              <CustomSelect
                label={LABELS.unit}
                id="page_size_unit"
                value={values.page_size_unit}
                onChange={handleChange('page_size_unit')}
              />
            </div>


            <div className="form-row">
              <CustomForm
                label={LABELS.redundancyFactor}
                type={INPUT_TYPE.number}
                id="redundancy_factor"
                placeholder={PLACEHOLDERS.number}
                value={values.redundancy_factor}
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

export default WebsiteBandwidth
