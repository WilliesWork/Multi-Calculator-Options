// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { CalculateSurfaceArea } from '../../../Services/MathStack'
import { surfaceAreaI } from '../../../Types/MathStack'
// import axios from 'axios'

const BallSurfaceArea = () => {
  const [initialFormValues] = React.useState({
    radius: ''
  })
  const [Result, setResult] = React.useState({
    surfaceArea: 0,
    Area: 0
  })

  return (
        <div>
            <h2> Ball Surface Area</h2>
            <Formik
                initialValues={initialFormValues}

                onSubmit={async ({

                  radius

                }, { setSubmitting, resetForm }) => {
                  const payload: surfaceAreaI = {
                    radius,
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
                                id="radius"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.radius}
                                onChange={handleChange}

                            />

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
