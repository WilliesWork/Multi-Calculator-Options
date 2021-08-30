// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { Formik } from 'formik'
import { CalculateCubeSurfaceArea } from '../../../Services/MathStack'
import { cubeAreaI } from '../../../Types/MathStack'

const CubeSurfaceArea = () => {
  const [initialFormValues] = React.useState({
    edge_length: ''
  })
  const [Result, setResult] = React.useState({
    cubeSurfaceArea: 0,
    Area: 0
  })
  return (
        <div>
            <h2> Cube Surface Area</h2>
            <Formik
                initialValues={initialFormValues}

                onSubmit={async ({

                  // eslint-disable-next-line camelcase
                  edge_length

                }, { setSubmitting, resetForm }) => {
                  const payload: cubeAreaI = {
                    edge_length,
                    method: 'cubeSurfaceAreaCalculator'
                  }
                  console.log(JSON.stringify(payload))
                  try {
                    const { payload: calculateCubeArea } = await CalculateCubeSurfaceArea(payload)
                    console.log('=====>', calculateCubeArea)
                    if (typeof calculateCubeArea === 'object') {
                      console.log(calculateCubeArea)
                      setResult({
                        cubeSurfaceArea: calculateCubeArea.CubeSurfaceArea,
                        Area: calculateCubeArea.Area
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
                                label="Edge-Length"
                                id="edge_length"
                                placeholder="0.0"
                                variant="outlined"
                                size="small"
                                value={values.edge_length}
                                onChange={handleChange}

                            />

                            <div style={{ padding: 20 }}>
                                <Button variant="outlined" color="primary" type="submit">
                                    Calculate
                                </Button>
                            </div>
                            <div>
                                <h4>Cube Surface Area: {Result.cubeSurfaceArea}</h4>
                                <h4> Area: {Result.Area}</h4>
                            </div>
                        </div>
                    </form>
                )}

            </Formik>

        </div>
  )
}

export default CubeSurfaceArea
