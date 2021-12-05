import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'
export function SimplifyFractionsCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    valueA:"",
                    valuea:"",
                    valueb:"",
                    method: "SimplifyFractionsCalculator"
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
                                name="valueA"
                                onChange={handleChange}
                                value={values.valueA}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Vaue a</label>
                            <CustomForm
                                type="text"
                                name="valuea"
                                onChange={handleChange}
                                value={values.valuea}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Vaue b</label>
                            <CustomForm
                                type="text"
                                name="valueb"
                                onChange={handleChange}
                                value={values.valueb}
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