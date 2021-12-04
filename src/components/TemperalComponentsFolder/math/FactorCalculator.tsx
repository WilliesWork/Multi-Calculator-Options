import React from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'

export function FactorCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    value:"",
                    method: "FactorCalculator"
                }}
                onSubmit = {(values)=>{
                    console.log("I am submmited ", values)
                }}>
                    
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label style={{ marginRight: 10 }}>Factor</label>
                        <CustomForm
                            type="text"
                            name="value"
                            id="value"
                            onChange={handleChange}
                            value={values.value}
                            placeholder=""
                         />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
}