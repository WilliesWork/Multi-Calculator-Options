import React from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'

export function BinaryToDecimalCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    value:"",
                    method: "BinaryToDecimalCalculator"
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
                        <label style={{ marginRight: 10 }}>Binaary Value</label>
                        <CustomForm
                            type="text"
                            name="name"
                            id="fibonacci"
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