import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { TakaSchlichBodySurfaceAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomBtn, CustomTextInput, CustomSelect, Label } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const TakaSchlichBodySurfaceArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: '',
    gender: '',
  })
  const [Result, setResult] = React.useState({
    bodySurfaceArea: 0,
    unit: ''
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.takaSchlichBodySurfaceArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit,
          gender,
        }, { setSubmitting, resetForm }) => {
          const payload: TakaSchlichBodySurfaceAreaI = {
            height,
            height_unit,
            weight,
            weight_unit,
            gender,
            method: 'SchlichFormulaBodySurfaceArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: takaSchlichBodySurfaceArea } = await calculateHealth(payload)
            console.log('=====>', takaSchlichBodySurfaceArea)
            if (typeof takaSchlichBodySurfaceArea === 'object') {
              const { bodySurfaceArea, unit } = takaSchlichBodySurfaceArea
              setResult({
                bodySurfaceArea: bodySurfaceArea,
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

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1">Body surface area: {Result.bodySurfaceArea}</Typography>
            </div>

          </form>
        )}

      </Formik>

    </div>
  )
}

export default TakaSchlichBodySurfaceArea
