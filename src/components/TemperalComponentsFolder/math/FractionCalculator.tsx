import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function FractionCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    valuea:"",
                    valueb: "",
                    valuec: "",
                    valued:"",
                    operation:"",
                    method: "FractionCalculator"
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
                            <label style={{ marginRight: 10 }}>Value A</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.valuea}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Value B</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.valueb}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Value C</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.valuec}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Value D</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.valued}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Operation</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
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