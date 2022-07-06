import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { StockTradingMarginI } from '../../../types'
import { RootState } from '../../../redux/store'
import useStyles from '../../../styling/CustomStyles'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../../common/shared'
import { CustomForm, CustomSelect, CustomBtn, Label } from '../../custom'
import { calculateFinances } from '../../../services/AppCalculatorsApi'

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
    amountRequired: 0,
    currency: ''
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
            method: 'stockTradingMarginCalculator'
          }
          console.log(JSON.stringify(payload))
          try {
            const { payload: stockTradingMarginCalculator } = await calculateFinances(payload)
            console.log('=====>', stockTradingMarginCalculator)
            const { amountRequired, currency } = stockTradingMarginCalculator
            if (typeof stockTradingMarginCalculator === 'object') {
              setResult({
                amountRequired: amountRequired,
                currency: currency
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
              <Label title={LABELS.marginRequirement} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="margin_requirement"
                placeholder={PLACEHOLDERS.number}
                value={values.margin_requirement}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.stockPrice} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="stock_price"
                placeholder={PLACEHOLDERS.number}
                value={values.stock_price}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <Label title={LABELS.shares} />
              <CustomForm
                type={INPUT_TYPE.number}
                id="shares"
                placeholder={PLACEHOLDERS.number}
                value={values.shares}
                onChange={handleChange}
              />
            </div>

            <CustomBtn />

            <div className="text-center mb-3">
              <Typography variant="subtitle1"> Amount required: {Result.currency}{Result.amountRequired}</Typography>
            </div>

          </form>
        )}

      </Formik>
    </div>
  )
}

export default StockTradingMargin
