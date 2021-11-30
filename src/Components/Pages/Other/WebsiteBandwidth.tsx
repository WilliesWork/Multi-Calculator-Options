import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { WebsiteBandwidthI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../Services/AppCalculatorsApi'

const WebsiteBandwidth = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    page_views: "",
    page_views_unit: "",
    page_size: "",
    page_size_unit: "",
    redundancy_factor: ""
  })
  const [Result, setResult] = React.useState({
    website_bandwidth: '',
    page_views: '',
    page_size: '',
    redundancy_factor: '',
    unit: ''
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
            redundancy_factor,
            method: 'WebsiteBandwidthCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: websiteBandwidth } = await calculateOthers(payload)
            console.log('=====>', websiteBandwidth)
            const { website_bandwidth, unit, page_views, page_size, redundancy_factor
            } = websiteBandwidth
            if (typeof websiteBandwidth === 'object') {
              setResult({
                website_bandwidth: website_bandwidth,
                page_views: page_views,
                page_size: page_size,
                redundancy_factor: redundancy_factor,
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
              <Label title={LABELS.pageViews} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="page_views"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="storage"
                id="page_views_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.pageSize} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="page_size"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="storage"
                id="page_size_unit"
              />
            </div>


            <div className="form-row">
              <Label title={LABELS.redundancyFactor} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="redundancy_factor"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Website bandwidth: {Result.website_bandwidth}</Typography>
              <Typography variant="subtitle1"> Page views: {Result.page_views}</Typography>
              <Typography variant="subtitle1"> Page size: {Result.page_size}</Typography>
              <Typography variant="subtitle1"> Redanduncy factor: {Result.redundancy_factor}</Typography>
              <Typography variant="subtitle1"> Unit: {Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default WebsiteBandwidth
