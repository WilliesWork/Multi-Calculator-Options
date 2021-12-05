import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

export function FractionToDecimalCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    top:"",
                    bottom:"",
                    method: "FractionToDecimalCalculator"
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
                            <label style={{ marginRight: 10 }}>Top</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.top}
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label style={{ marginRight: 10 }}>Bottom</label>
                            <CustomForm
                                type="text"
                                name="name"
                                id="fibonacci"
                                onChange={handleChange}
                                value={values.bottom}
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