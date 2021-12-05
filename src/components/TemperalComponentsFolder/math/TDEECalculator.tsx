import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function TDEECalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    height:"",
                    height_unit: "",
                    weight: "",
                    weight_unit:"",
                    gender:"",
                    age: "",
                    activity: "",
                    BMR_estimation_formula:"",
                    method: "TDEECalculator"
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
                            <label style={{ marginRight: 10 }}>Height</label>
                            <CustomForm
                                type="text"
                                name="height"
                                onChange={handleChange}
                                value={values.height}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Height Unit</label>
                            <CustomForm
                                type="text"
                                name="height_unit"
                                onChange={handleChange}
                                value={values.height_unit}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Weight</label>
                            <CustomForm
                                type="text"
                                name="weight"
                                onChange={handleChange}
                                value={values.weight}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Weight Unit</label>
                            <CustomForm
                                type="text"
                                name="weight_unit"
                                onChange={handleChange}
                                value={values.weight_unit}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Gender</label>
                            <CustomForm
                                type="text"
                                name="gender"
                                onChange={handleChange}
                                value={values.gender}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Age</label>
                            <CustomForm
                                type="text"
                                name="age"
                                onChange={handleChange}
                                value={values.age}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Activity</label>
                            <CustomForm
                                type="text"
                                name="activity"
                                onChange={handleChange}
                                value={values.activity}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>BMR Estimation Formula</label>
                            <CustomForm
                                type="text"
                                name="BMR_estimation_formula"
                                onChange={handleChange}
                                value={values.BMR_estimation_formula}
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