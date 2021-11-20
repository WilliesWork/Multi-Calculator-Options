import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { HostingBandwidthI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomBtn, CustomForm, CustomSelect, Label } from '../../custom'
import { calculateOthers } from '../../../services/AppCalculatorsApi'

const HostingBandwidth = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    monthly_usage: '',
    monthly_usage_unit: '',
  })
  const [Result, setResult] = React.useState({
    hostingBandwidthPerMonth: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.hostingBandwidth}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          monthly_usage,
          monthly_usage_unit,
        }, { setSubmitting, resetForm }) => {
          const payload: HostingBandwidthI = {
            monthly_usage,
            monthly_usage_unit,
            method: 'HostingBandwidthConverter'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: hostingBandwidthConverter } = await calculateOthers(payload)
            console.log('=====>', hostingBandwidthConverter)
            const { hostingBandwidthPerMonth, unit,
            } = hostingBandwidthConverter
            if (typeof hostingBandwidthConverter === 'object') {
              setResult({
                hostingBandwidthPerMonth: hostingBandwidthPerMonth,
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
              <Label title={LABELS.resistanceValues} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="monthly_usage"
                placeholder={PLACEHOLDERS.number}
                value={values.monthly_usage}
                onChange={handleChange}
              />

              <CustomSelect
                id="monthly_usage_unit"
                value={values.monthly_usage_unit}
                onChange={handleChange('monthly_usage_unit')}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Hosting bandwidth per month: {Result.hostingBandwidthPerMonth}{Result.unit}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default HostingBandwidth
