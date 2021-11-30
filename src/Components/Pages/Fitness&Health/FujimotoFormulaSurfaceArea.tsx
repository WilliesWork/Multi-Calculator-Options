import React from 'react'
import { Formik } from 'formik'
import { Typography, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { FujimotoFormulaSurfaceAreaI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from '../../../Common/shared'
import { CustomTextInput, CustomSelect, Label, CustomBtn } from '../../custom'
import { calculateHealth } from '../../../Services/AppCalculatorsApi'

const FujimotoFormulaSurfaceArea = () => {
  const classes = useStyles()
  const [initialFormValues] = React.useState({
    height: '',
    height_unit: '',
    weight: '',
    weight_unit: ''
  })
  const [Result, setResult] = React.useState({
    bodySurfaceArea: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.fujimotoFormulaSurfaceArea}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          height,
          height_unit,
          weight,
          weight_unit
        }, { setSubmitting, resetForm }) => {
          const payload: FujimotoFormulaSurfaceAreaI = {
            height,
            height_unit,
            weight,
            weight_unit,
            method: 'FujimotoFormulaBodySurfaceArea'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: fujimotoFormulaBodySurfaceArea } = await calculateHealth(payload)
            console.log('=====>', fujimotoFormulaBodySurfaceArea)
            if (typeof fujimotoFormulaBodySurfaceArea === 'object') {
              const { bodySurfaceArea } = fujimotoFormulaBodySurfaceArea
              setResult({
                bodySurfaceArea: bodySurfaceArea,
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

export default FujimotoFormulaSurfaceArea
