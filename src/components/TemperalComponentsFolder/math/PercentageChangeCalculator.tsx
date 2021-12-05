import React, { useRef } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

const boxStyle = {
    width: 1,
    p: 1,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    minHeight: 150
 }

 const innerBoxStyle = {
    width: 400,
    minHeight: 300,
    borderRadius: 10,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white'
 }

function PercentageChangeCalculator(){
    const animatedSquaresRef1 = useRef(null)
    const animatedSquaresRef2= useRef(null)
  
    // @ts-ignore: Object is possibly 'null'.
    const play1 = () => animatedSquaresRef1.current.play();
    // @ts-ignore: Object is possibly 'null'.
    const play2 = () => animatedSquaresRef2.current.play();


    return(
        <AddLayout>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Anime
                style={{
                    position: 'absolute',
                }}
                ref={animatedSquaresRef1}
                config={{
                    translateX: -250,
                //   direction: 'alternate',
                    easing: 'easeInOutSine',
                    autoplay: false,
                }}>
                <div style={innerBoxStyle}>
                    

                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{height:30, width: '100%' }}></Box>
                        <Box sx={{
                                height:30, width: '100%', 
                                backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)',
                                borderRadius: '0 10px 3px', 
                            }}></Box>
                    </Box>
                    <Formik
                        initialValues={{ 
                            percentage:"",
                            value: "",
                            type: "",
                            method: "PercentageCalculator"
                        }}
                        onSubmit = {(values)=>{
                            console.log("I am submmited ", values)
                        }}>
                            
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box sx={{  minHeight: 300, display:'flex', flexDirection:'column' }}>
                                    <Grid container={true} >

                                        <Grid item={true} xs={5} ><Box>Percentage</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <CustomForm
                                                type="text"
                                                name="percentage"
                                                onChange={handleChange}
                                                value={values.percentage}
                                                placeholder=""
                                            />
                                        </Grid>
                
                                        <Grid item xs={5}><label style={{ marginRight: 10 }}>Value</label></Grid>
                                        <Grid item xs={7}>
                                        <CustomForm
                                            type="text"
                                            name="value"
                                            onChange={handleChange}
                                            value={values.value}
                                            placeholder=""
                                        />
                                        </Grid>
                                    
                                        <Grid item xs={5}><label style={{ marginRight: 10 }}>Type</label></Grid>
                                        <Grid item xs={7}>
                                            <CustomForm
                                                type="text"
                                                name="confidence_level"
                                                onChange={handleChange}
                                                value={values.type}
                                                placeholder=""
                                            />
                                        
                                        </Grid>                    
                                    </Grid>
                                    <Box sx={{ flexGrow: 1}}>
                                        {/* 
                                            Flex box pushes submit button down
                                        */}
                                    </Box>

                                   <Grid container sx={{ border:''}}>
                                       <Grid item xs={4}>
                                            <Box>
                                                <button type="button" onClick={()=>{
                                                    play1();
                                                    play2();
                                                }}>
                                                    Clear
                                                </button>
                                            </Box>
                                       </Grid>
                                       <Grid item xs={4}></Grid>
                                       <Grid item xs={4}>
                                       <Box>
                                                <button type="button" onClick={()=>{
                                                    play1();
                                                    play2();
                                                }}>
                                                    Calculate
                                                </button>
                                            </Box>
                                       </Grid>
                                   </Grid>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </div>
            </Anime>


            {/*
                Component displays the results 
            
            */}

            <Anime
                style={{
                    position: 'absolute',
                    zIndex: -5
                }}
                ref={animatedSquaresRef2}
                config={{
                    translateX: 200,
                //   direction: 'alternate',
                    easing: 'easeInOutSine',
                    autoplay: false,
                }}>
                 <div style={innerBoxStyle}>
                    <p>Display Answer</p>
                </div>
            </Anime>
            
            </Box>
            
        </AddLayout>
    );   
}

export default PercentageChangeCalculator