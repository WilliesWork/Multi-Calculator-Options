import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function ZscoreCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    raw_score:"",
                    population_mean:"",
                    standard_deviation:"",
                    method: "ZscoreCalculator"
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
                            <label style={{ marginRight: 10 }}>Raw Acore</label>
                            <CustomForm
                                type="text"
                                name="raw_score"
                                onChange={handleChange}
                                value={values.raw_score}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Population Mean</label>
                            <CustomForm
                                type="text"
                                name="population_mean"
                                onChange={handleChange}
                                value={values.population_mean}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Standard Deviation</label>
                            <CustomForm
                                type="text"
                                name="standard_deviation"
                                onChange={handleChange}
                                value={values.standard_deviation}
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