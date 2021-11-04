import React from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { StockTradingMarginI } from '../../../Types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../Styling/CustomStyles'
import { CALCULATORS, BUTTONS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../Common/shared'
import { CustomForm, CustomSelect } from '../../custom'

const StockTradingMargin = () => {
  const classes = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    margin_requirement: "",
    stock_price: "",
    shares: "",
  })
  const [Result, setResult] = React.useState({
    Answer: 0
  })

  return (
    <div>
      <Grid item xs={12}>
        <Typography className="text-center" variant="h5" gutterBottom>
          {CALCULATORS.stockTradingMargin}
        </Typography>
      </Grid>

      <Formik
        initialValues={initialFormValues}
        onSubmit={async ({
          margin_requirement,
          stock_price,
          shares,
        }, { setSubmitting, resetForm }) => {
          const payload: StockTradingMarginI = {
            margin_requirement,
            stock_price,
            shares,
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
                label={LABELS.marginRequirement}
                type={INPUT_TYPE.number}
                id="margin_requirement"
                placeholder={PLACEHOLDERS.number}
                value={values.margin_requirement}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.stockPrice}
                type={INPUT_TYPE.number}
                id="stock_price"
                placeholder={PLACEHOLDERS.number}
                value={values.stock_price}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <CustomForm
                label={LABELS.shares}
                type={INPUT_TYPE.number}
                id="shares"
                placeholder={PLACEHOLDERS.number}
                value={values.shares}
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

export default StockTradingMargin
