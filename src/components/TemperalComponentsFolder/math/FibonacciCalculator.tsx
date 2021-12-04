import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik'
import { Grid , Box, Typography, LinearProgress, Button } from '@mui/material'
import CustomForm from '../../forms/CustomForm'
import { mathMainService } from '../../../services/mathService/mathMainService'

export function FibonacciCalculator(){
    return(
        <>
            <Formik
                initialValues={{ 
                    nthvalue:"12",
                    cars:"",
                    method: "FibonacciCalculator",
                }}
                onSubmit = {(values)=>{
                    const data = {
                        nthvalue: values.nthvalue,
                        method: values.method
                    }
                    const postDataFunction = async () => {
                        const dataReturned = await mathMainService(data);
                        console.log(dataReturned)
                    }

                    postDataFunction();
                }}>
                    
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label style={{ marginRight: 10 }}>Nth Value</label>
                        <CustomForm
                            type="text"
                            name="nthvalue"
                            onChange={handleChange}
                            value={values.nthvalue}
                         />
                         <label>Choose a car:</label>
                        <select id="cars" name="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
}

