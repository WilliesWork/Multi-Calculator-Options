import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { DueDateMittendorfWilliamI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const DueDateMittendorfWilliam = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    first_date_of_last_period: '',
    type: ''
  })
  const [Result, setResult] = React.useState({
    dueDate: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.dueDateMittendorfWilliam}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          first_date_of_last_period,
          type,
        }, { setSubmitting, resetForm }) => {
          const payload: DueDateMittendorfWilliamI = {
            first_date_of_last_period,
            type,
            method: 'DueDateMittendorfWilliamRule'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: dueDateMittendorf } = await calculateHealth(payload)
            console.log('=====>', dueDateMittendorf)
            if (typeof dueDateMittendorf === 'object') {
              const { dueDate } = dueDateMittendorf
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
                placeholder={PLACEHOLDERS.date}
                value={values.first_date_of_last_period}
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
              <Typography variant="subtitle1">Due Date: {Result.dueDate} </Typography>
            </div>

          </form>
        )}

      </Formik>

    </div >
  )
}

export default DueDateMittendorfWilliam
