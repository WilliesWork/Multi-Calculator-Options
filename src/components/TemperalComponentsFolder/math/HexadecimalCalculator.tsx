import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function HexadecimalCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    first_value:"",
                    second_value:"",
                    operation:"",
                    method: "HexadecimalCalculator"
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
                        <div>
                            <label style={{ marginRight: 10 }}>First Value</label>
                            <CustomForm
                                type="text"
                                name="first_value"
                                onChange={handleChange}
                                value={values.first_value}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Second value</label>
                            <CustomForm
                                type="text"
                                name="second_value"
                                onChange={handleChange}
                                value={values.second_value}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Operation</label>
                            <CustomForm
                                type="text"
                                name="operation"
                                onChange={handleChange}
                                value={values.operation}
                                placeholder=""
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
}