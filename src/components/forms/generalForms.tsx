import React,  { useState, useEffect } from 'react'
import { Grid , Box, Typography, LinearProgress, Button } from '@mui/material'
import { Field, Form, Formik, FormikProps } from 'formik'
import { UniversalDisplay } from '../displays/universalDisplay'

function SingleFieldForm(props:any){
    const field_name_1 = props.fieldName1
    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const propFunction = props.resultFunction

    return(
        <div className="container d-flex justify-content-center">
            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                        }}
                        onSubmit={(value, actions) =>{
                           const postDataFunction = async () => {
                               const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                               console.log(dataReturned);
                               setResult(dataReturned);
                               propFunction(dataReturned);
                           }

                           postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_1}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                       
                                        <Grid item xs={12} md={12}>
                                            <UniversalDisplay displayData={results} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}


function TwoFieldForm(props:any){
    const field_name_1 = props.fieldName1
    const field_name_2 = props.fieldName2
    const propFunction = props.resultFunction

    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="container d-flex justify-content-center">

            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                            value_2: '',
                        }}
                        onSubmit={(value, actions) =>{
                            const postDataFunction = async () => {
                                const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                                console.log(dataReturned);
                                setResult(dataReturned);
                                propFunction(dataReturned);
                            }
                            postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_1}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_2}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_2" />
                                        </Grid>
                                       
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                    
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}


function ThreeFieldForm(props:any){
    const field_name_1 = props.fieldName1
    const field_name_2 = props.fieldName2
    const field_name_3 = props.fieldName3
    const propFunction = props.resultFunction

    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="container d-flex justify-content-center">

            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                            value_2: '',
                            value_3: '',
                        }}
                        onSubmit={(value, actions) =>{
                           const postDataFunction = async () => {
                               const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                               console.log(dataReturned);
                               setResult(dataReturned);
                               propFunction(dataReturned);
                           }

                           postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_1}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_2}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_2" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_3}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_3" />
                                        </Grid>
                                     
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                    
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}

function ThreeFieldFormWithOptions(props:any){
    const field_name_1 = props.fieldName1
    const field_name_2 = props.fieldName2
    const field_name_3 = props.fieldName3
    const field_options = props.feildOptions
    const propFunction = props.resultFunction

    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="container d-flex justify-content-center">

            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                            value_2: '',
                            value_3: '',
                        }}
                        onSubmit={(value, actions) =>{
                           const postDataFunction = async () => {
                               const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                               console.log(dataReturned);
                               setResult(dataReturned);
                               propFunction(dataReturned);
                           }

                           postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_1}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_2}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_2" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_3}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" as="select" name="value_3">
                                            {field_options.map((data:string) => (
                                                <option key={data} >{
                                                    data
                                                }</option>
                                            ))}
                                            </Field>
                                        </Grid>
                                    
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}


function FourFieldForm(props:any){
    const field_name_1 = props.fieldName1
    const field_name_2 = props.fieldName2
    const field_name_3 = props.fieldName3
    const field_name_4 = props.fieldName4
    const propFunction = props.resultFunction

    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="container d-flex justify-content-center">

            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                            value_2: '',
                            value_3: '',
                            value_4: '',
                        }}
                        onSubmit={(value, actions) =>{
                           const postDataFunction = async () => {
                               const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                               console.log(dataReturned);
                               setResult(dataReturned)
                               propFunction(dataReturned)
                           }
                           postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_1}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_2}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_2" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_3}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_3" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    {field_name_4}
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_4" />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}

function SixFieldForm(props:any){
    const propFunction = props.resultFunction
    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="container d-flex justify-content-center">

            <Box sx={{
                width: '100',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 5,
                paddingRight: 5
                }}>
                     <Box sx={{width: 400, m:4}}>
                        <Formik
                        initialValues={{
                            value_1: '',
                            value_2: '',
                            value_3: '',
                            value_4: '',
                            value_5: '',
                            value_6: ''
                        }}
                        onSubmit={(value, actions) =>{
                           const postDataFunction = async () => {
                               const dataReturned = await props.serviceFunction(value, props.serviceMethodName);
                               console.log(dataReturned);
                               setResult(dataReturned)
                               propFunction(dataReturned)
                           }

                           postDataFunction();
                        }}>
                            {(props: FormikProps<any>) =>(
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 1
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_1" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 2
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_2" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 3
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_3" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 4
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_4" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 5
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_5" />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="div">
                                                <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                                    Value 6
                                                </Box>
                                            </Typography>
                                            <Field className="custom-form-control" type="text" name="value_6" />
                                        </Grid>
                                    
                                        <Grid item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                        </Grid>

                                        <Grid item xs={4}></Grid>
                                        <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                            <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">Calculate</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            <Box/>
               
        </div>
    );
}


export { 
        TwoFieldForm, 
        SingleFieldForm,
        ThreeFieldForm,
        ThreeFieldFormWithOptions,
        FourFieldForm,
        SixFieldForm
    }