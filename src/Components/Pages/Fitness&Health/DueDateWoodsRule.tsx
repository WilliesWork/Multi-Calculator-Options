import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { DueDateWoodsRuleI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const DueDateWoodsRule = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    first_date_of_last_period: '',
    days: '',
    type: '',
  })
  const [Result, setResult] = React.useState({
    dueDate: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.dueDateWoodsRule}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          first_date_of_last_period,
          days,
          type,
        }, { setSubmitting, resetForm }) => {
          const payload: DueDateWoodsRuleI = {
            first_date_of_last_period,
            days,
            type,
            method: 'DueDateWoodsRule'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: dueDateWoodsRule } = await calculateHealth(payload)
            console.log('=====>', dueDateWoodsRule)
            if (typeof dueDateWoodsRule === 'object') {
              const { dueDate } = dueDateWoodsRule
              setResult({
                dueDate: dueDate,
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
              <Label title={LABELS.type} />
              <CustomForm
                type={INPUT_TYPE.text}
                id="type"
                placeholder={PLACEHOLDERS.type}
                value={values.type}
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

export default DueDateWoodsRule
