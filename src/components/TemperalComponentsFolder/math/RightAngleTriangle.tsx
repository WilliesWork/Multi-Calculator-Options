import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function RightAngleTriangle(){
    return(
        <>
            <Formik
                initialValues={{ 
                    sideA:"",
                    sideB:"",
                    sideC:"",
                    perimeter:"",
                    method: "RightAngleTriangle" 
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
                            <label style={{ marginRight: 10 }}>Side A</label>
                            <CustomForm
                                type="text"
                                name="sideA"
                                onChange={handleChange}
                                value={values.sideA}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Side B</label>
                            <CustomForm
                                type="text"
                                name="sideB"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.sideB}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Side C</label>
                            <CustomForm
                                type="text"
                                name="sideC"
                                onChange={handleChange}
                                value={values.sideC}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Perimeter</label>
                            <CustomForm
                                type="text"
                                name="perimeter"
                                onChange={handleChange}
                                value={values.perimeter}
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