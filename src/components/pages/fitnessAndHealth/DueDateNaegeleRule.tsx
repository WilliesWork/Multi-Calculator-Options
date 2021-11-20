import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { DueDateNaegeleRuleI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../services/AppCalculatorsApi'

const DueDateNaegeleRule = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    first_date_of_last_period: '',
    days: '',
    method: '',
  })
  const [Result, setResult] = React.useState({
    dueDate: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.dueDateNaegeleRule}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          first_date_of_last_period,
          days,
          method,
        }, { setSubmitting, resetForm }) => {
          const payload: DueDateNaegeleRuleI = {
            first_date_of_last_period,
            days,
            method: 'DueDateNaegeleRule'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: dueDateNaegeleRule } = await calculateHealth(payload)
            console.log('=====>', dueDateNaegeleRule)
            if (typeof dueDateNaegeleRule === 'object') {
              const { dueDate } = dueDateNaegeleRule
              setResult({
                dueDate: dueDate
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
              <Label title={LABELS.firstDateofLastPeriod} />
              <CustomForm
                type={INPUT_TYPE.date}
                id="first_date_of_last_period"
                placeholder={PLACEHOLDERS.number}
                value={values.first_date_of_last_period}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.days} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="days"
                placeholder={PLACEHOLDERS.number}
                value={values.days}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.method} />
              <CustomForm
                type={INPUT_TYPE.text}
                id="method"
                placeholder={PLACEHOLDERS.method}
                value={values.method}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Due date: {Result.dueDate}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default DueDateNaegeleRule
