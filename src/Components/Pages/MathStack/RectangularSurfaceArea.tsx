// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Formik } from 'formik'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { calculateRectangularArea, CalculateSurfaceArea } from '../../../Services/MathStack'
import { RectangularAreaI, surfaceAreaI } from '../../../Types/MathStack'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Units } from '../../../Common/MathUnits'
// import axios from 'axios'

const RectangularSurfaceArea = () => {
  const measures = useSelector((state: RootState) => state.unitMeasures)
  console.log(measures)
  const [initialFormValues] = React.useState({
   length: '',
   length_unit: '',
   width: '',
   width_unit: '',
   height: '',
   height_unit: ''

  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
        <div>
            <h2> Rectangular Surface Area</h2>
            <Formik
                initialValues={initialFormValues}

                onSubmit={async ({

                    length,
                    length_unit,
                    width,
                    width_unit,
                    height,
                    height_unit
                 

                }, { setSubmitting, resetForm }) => {
                  const payload: RectangularAreaI = {
                    length,
                    length_unit,
                    width,
                    width_unit,
                    height,
                    height_unit,
                    method: 'ballSurfaceAreaCalculator'
                  }
                  console.log(JSON.stringify(payload))
                  try {
                    const { payload: calsurfaceArea } = await calculateRectangularArea(payload)
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
                                label="Length"
                                id="length"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.length}
                                onChange={handleChange}

                            />
                            <InputLabel htmlFor="genderID-select">Units</InputLabel>
                            <Select
                              required
                              name="radiusID"
                              value={values.length_unit}
                              onChange={handleChange('radiusID')}
                              id="radius_units"
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
                            <div>
                            <TextField
                                label="Height"
                                id="height"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.height}
                                onChange={handleChange}

                            />
                            {/* <InputLabel htmlFor="genderID-select">Gender *</InputLabel>
                            <Select
                              required
                              name="radiusID"
                              value={values.radius_unit}
                              onChange={handleChange('radiusID')}
                              id="radius_units"
                            >
                              <MenuItem value={0}>
                                <em>-- Select Gender --</em>
                              </MenuItem>
                              {genders.map(({ genderID, genderName }) => (
                                <MenuItem key={genderID} value={genderID}>
                                  {genderName}
                                  {console.log(genderID)}
                                </MenuItem>
                              ))}
                            </Select> */}
                            </div>

                            <div>
                            <TextField
                                label="Width"
                                id="width"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.width}
                                onChange={handleChange}

                            />
                            <InputLabel htmlFor="genderID-select">Units *</InputLabel>
                            <Select
                              required
                              name="radiusID"
                              value={values.width_unit}
                              onChange={handleChange('radiusID')}
                              id="radius_units"
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
                            </div>

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

export default RectangularSurfaceArea
