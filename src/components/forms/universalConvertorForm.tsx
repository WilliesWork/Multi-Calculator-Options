import React, { useState, useEffect } from 'react'
import { Button, Grid, Box, Typography, LinearProgress } from '@mui/material'
import { Field, Form, Formik, FormikProps } from 'formik';

function UniversalConverterForm(props:any){
    // using the useState ehook
    const [optionsData, setData] = useState([]); //for getting units
    const [results, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const propFunction = props.resultFunction

    //using the useEffect hook
    useEffect(() => {
        const fetchData = async () => {

          //fetches defined units for converter
          const result = await props.unitsFunnction()
          // setData(prevRes => ([...prevRes, ...result]))
          setData(result)
        };
        fetchData();
    }, [])

    return(
        <div className="d-flex justify-content-center ">
            <Box sx={{
                width: '100%',
                borderRadius: 3, 
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
                
                }}>
                <Box sx={{width: 400, m: 4,}}> 
                <Formik
                    initialValues={{ value: '1', fromUnit: "", toUnit: "" }}
                    onSubmit={(values, actions) => {
                      
                       const postData = async () => {
                        const data = {
                          value: values.value,
                          from_unit: values.fromUnit,
                          to_unit: values.toUnit,
                          method: props.convertMethod
                        }

                        setIsLoading(true)
                        const dataReturned = await props.convertFunction(data);
                        var status:any = dataReturned.statusDescription;
                        if(status === "success"){
                          setIsLoading(false)
                          setResult(dataReturned.message.convertionValue)
                          propFunction(dataReturned.message.convertionValue)
                        }
                        else{
                          setIsLoading(false)
                        }
                       }

                       postData();
                    }}
                    >
                    {(props: FormikProps<any>) => (
                    <Form >
                      
                        <Grid container spacing={4} sx={{border:"solid"}}>
                            <Grid item xs={12} md={4} sx={{border:"solid", borderColor:'red'}}> 
                                <Typography component="div">
                                    <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                        Value
                                    </Box>
                                </Typography>
                                <Field className="custom-form-control" type="text" name="value" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="div">
                                    <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                        From 
                                    </Box>
                                </Typography>
                                <Field className="select-options-styling" as="select" name="fromUnit" >
                                  <option>Select Convertion Unit</option>
                                  {optionsData.map((data, i) => (
                                    <option key={data} >{
                                        data
                                    }</option>
                                  ))}
                                                    
                                </Field>                            
                                </Grid>
                            <Grid item xs={12} md={4}>
                            <Typography component="div">
                                    <Box sx={{ fontSize: 18, fontWeight: 500}}>
                                        To 
                                    </Box>
                                </Typography>
                                <Field className="select-options-styling" as="select" name="toUnit">
                                  <option >Select ConVertion Unit</option>
                                  {optionsData.map((data, i) => (
                                    <option key={data} >{
                                        data
                                    }</option>
                                  ))}
                                </Field>
                            </Grid>
                            <Grid item xs={12} md={12}>
                            {
                              isLoading ? 
                              ( <Box sx={{  width: 1, }}>
                              <LinearProgress  />
                              </Box> ):
                            (<div></div>)
                            }
                            </Grid>
                            <Grid item xs={12} >
                              <Grid container spacing={0}>
                                <Grid item xs={4}>
                                  <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="button">Clear</Button>
                                </Grid>
                                <Grid item xs={4}></Grid>
                                <Grid sx={{  display: 'flex', justifyContent: 'right' }} item xs={4}>
                                  <Button sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 20, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} type="submit">calculate</Button>
                                </Grid>
                            </Grid>
                          </Grid>
                        </Grid>   
                    </Form>
                    )}
                    </Formik>
                </Box>
                
            </Box>
        </div>
    );
}

export {UniversalConverterForm}