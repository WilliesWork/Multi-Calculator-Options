import React from 'react'
import { Formik } from 'formik'

const ballSurfaceArea = () => {
    const [initialFormValues] = React.useState({
        surfaceArea: 0,
        area: 0
    })
    return (
        <div>
            <h2> Ball Surface Area</h2>
            <Formik
            initialValues={initialFormValues}

            onSubmit={() => alert()}
            >
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    
                </form>
            )}

            </Formik>

        </div>
    )
}

export default ballSurfaceArea
