import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function DecimalToBinaryCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    value:"",
                    method: "DecimalToBinaryCalculator"
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
                        <label style={{ marginRight: 10 }}>Binary Value</label>
                        <CustomForm
                            type="text"
                            name="value"
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