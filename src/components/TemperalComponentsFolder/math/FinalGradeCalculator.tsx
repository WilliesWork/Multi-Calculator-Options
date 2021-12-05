import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function FinalGradeCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    desired_grade:"",
                    current_grade:"",
                    weight_of_final:"",
                    method: "FinalGradeCalculator"
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
                            <label style={{ marginRight: 10 }}>Desired Grad</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.desired_grade}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Current Grade</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.current_grade}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Weight Of Final</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.weight_of_final}
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