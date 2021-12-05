import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function RatioCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    a:"",
                    b:"",
                    c:"",
                    d:"",
                    method: "RatioCalculator"
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
                            <label style={{ marginRight: 10 }}>A</label>
                            <CustomForm
                                type="text"
                                name="a"
                                onChange={handleChange}
                                value={values.a}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>B</label>
                            <CustomForm
                                type="text"
                                name="b"
                                onChange={handleChange}
                                value={values.b}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>C</label>
                            <CustomForm
                                type="text"
                                name="c"
                                onChange={handleChange}
                                value={values.c}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>D</label>
                            <CustomForm
                                type="text"
                                name="d"
                                onChange={handleChange}
                                value={values.d}
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