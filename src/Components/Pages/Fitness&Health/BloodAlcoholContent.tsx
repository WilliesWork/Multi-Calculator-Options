import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { BloodAlcoholContentI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const BloodAlcoholContent = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    weight: '',
    weight_unit: '',
    gender: '',
    hours_of_drinking: '',
    minutes_of_drinking: '',
    number_of_standard_drinks: '',
  })
  const [Result, setResult] = React.useState({
    BAC: 0,
    numberOfHoursAverage: 0,
    divident: 0,
    divisor: 0,
    M: 0,
    N: 0,
    H: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.bloodAlcoholContent}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          weight,
          weight_unit,
          gender,
          hours_of_drinking,
          minutes_of_drinking,
          number_of_standard_drinks,
        }, { setSubmitting, resetForm }) => {
          const payload: BloodAlcoholContentI = {
            weight,
            weight_unit,
            gender,
            hours_of_drinking,
            minutes_of_drinking,
            number_of_standard_drinks,
            method: 'bloodAlcoholContent'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: BloodAlcoholContent } = await calculateHealth(payload)
            console.log('=====>', BloodAlcoholContent)
            if (typeof BloodAlcoholContent === 'object') {
              const { BAC, numberOfHoursAverage, divident, divisor, M, N, H } = BloodAlcoholContent
              setResult({
                BAC: BAC,
                numberOfHoursAverage: numberOfHoursAverage,
                divident: divident,
                divisor: divisor,
                M: M,
                N: N,
                H: H
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
              <Label title={LABELS.weight} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="weight"
                placeholder={PLACEHOLDERS.number}
              />

              <CustomSelect
                measurement="weight"
                id="weight_unit"
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.gender} />
              <CustomTextInput
                type={INPUT_TYPE.text}
                id="gender"
                placeholder={PLACEHOLDERS.gender}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.hoursOfDrinking} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="hours_of_drinking"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.minutesOfDrinking} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="minutes_of_drinking"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.numberOfStandardDrinks} />
              <CustomTextInput
                type={INPUT_TYPE.number}
                id="number_of_standard_drinks"
                placeholder={PLACEHOLDERS.number}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Blood alcohol content: {Result.BAC}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default BloodAlcoholContent
