// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Formik } from 'formik'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { surfaceAreaI } from '../../../Types/MathStack'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
import { makeStyles } from '@material-ui/core'
// import axios from 'axios'
const useStyles = makeStyles({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  formControl: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
  selectSmall: {
    '&>div': {
      padding: '12px 14px',
    },
  }
  
})

const BallSurfaceArea = () => {
  const {container,selectSmall, formControl} = useStyles()
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
    radius: '',
    radius_unit: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
        <div className={container}>
            <h2> Ball Surface Area</h2>
            <Formik
                initialValues={initialFormValues}

                onSubmit={async ({

                  radius,
                  radius_unit

                }, { setSubmitting, resetForm }) => {
                  const payload: surfaceAreaI = {
                    radius,
                    radius_unit,
                    method: 'ballSurfaceAreaCalculator'
                  }
                  console.log(JSON.stringify(payload))
                  try {
                    const { payload: calsurfaceArea } = await CalculateSurfaceArea(payload)
                    console.log('=====>', calsurfaceArea)
                    if (typeof calsurfaceArea === 'object') {
                      console.log(calsurfaceArea)
                      setResult({
                        surfaceArea: calsurfaceArea.surfaceAreas,
                        Area: calsurfaceArea.Area
                      })
                    }
                    resetForm()
                  } catch (err) {
                    console.log('====>', err)
                  }
                }}

            >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                label="Radius"
                                id="radiusValue"
                                name="radius"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.radius}
                                onChange={handleChange('radius')}

                            />
                            <FormControl variant="outlined" className={formControl}>
                            <InputLabel htmlFor="radiusUnits">Units</InputLabel>
                            <Select
                              className={selectSmall}
                              required
                              name="radius_units"
                              value={values.radius_unit}
                              onChange={handleChange('radius_units')}
                              id="radiusUnits"
                            >
                              <MenuItem value={0}>
                                <em>-- Select Units --</em>
                              </MenuItem>
                              {Units.map(({ name, unit }) => (
                                <MenuItem key={unit} value={unit}>
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                            </FormControl>
                             

                            <div style={{ padding: 20 }}>
                                <Button variant="outlined" color="primary" type="submit">
                                    Calculate
                                </Button>
                            </div>
                            <div>
                                <h4>SurfaceArea: {Result.surfaceArea}</h4>
                                <h4> Area: {Result.Area}</h4>
                            </div>
                        </div>
                    </form>
                )}

            </Formik>

        </div>
  )
}

export default BallSurfaceArea
