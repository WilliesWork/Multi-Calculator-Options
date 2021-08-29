// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'

const BallSurfaceArea = () => {
  const [initialFormValues] = React.useState({
    radius: 0
  })
  return (
        <div>
            <h2> Ball Surface Area</h2>
            <Formik
                initialValues={initialFormValues}

                onSubmit={() => alert('WilliesWheels')}
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

                            <div>
                                <Button variant="outlined" color="primary" type="submit">
                                    Calculate
                                </Button>
                            </div>
                        </div>
                    </form>
                )}

            </Formik>

        </div>
  )
}

export default BallSurfaceArea
