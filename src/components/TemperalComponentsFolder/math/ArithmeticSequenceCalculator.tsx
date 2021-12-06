/**
 * 
 * THIS MAKES THE Arithmetic Sequence Calculator FORM
 */

import React, { useRef, useState, useEffect } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'
import { CustomFormBtn } from '../../custom/CustomFormBtn'
import { NavBar2 } from '../../navbar/navbar2'
const Latex = require('react-latex');

 const innerBoxStyle = {
    width: 400,
    height: 300,
    borderRadius: 10,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white'
 }

export default function ArithmeticSequenceCalculator(){
    const [value, setValue] = useState("")
    const animatedSquaresRef1 = useRef(null)
    const animatedSquaresRef2= useRef(null)
  
    // @ts-ignore: Object is possibly 'null'.
    const play1 = () => animatedSquaresRef1.current.play();
    // @ts-ignore: Object is possibly 'null'.
    const play2 = () => animatedSquaresRef2.current.play();

    useEffect(()=>{
        if(value){
            play1();
            play2();
        }
    })

    return(
        <>
        <NavBar2 pagename="Arithmetic Sequence Calculator" />
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
                            first_term:"",
                            common_difference: "",
                            number_of_observation: "",
                            method: "ArithmeticSequenceCalculator"
                        }}
                        onSubmit = {(values)=>{
                            const data = {
                                first_term: values.first_term,
                                common_difference: values.common_difference,
                                number_of_observation: values.number_of_observation,
                                method: values.method
                            }

                            const postData = async () => {
                                const responseData = await mathMainService(data)
                                var msg:any = responseData.statusDescription;
                                if(msg === "success"){
                                    setValue(responseData.message.answer)
                                    console.log(responseData)
                                }
                            }
                            postData()
                            
                        }}>
                            
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box sx={{height: 250, display:'flex', flexDirection:'column' }}>
                                    <Grid container={true} rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>
                                        <Grid item={true} xs={7}><Box>First Term</Box></Grid>
                                        <Grid item={true} xs={5} sx={{display:'flex'}}>
                                            <CustomForm
                                                type="text"
                                                name="first_term"
                                                onChange={handleChange}
                                                value={values.first_term}
                                                placeholder=""
                                            />
                                        </Grid>
                
                                        <Grid item xs={7}><Box>Common Difference</Box></Grid>
                                        <Grid item xs={5}>
                                        <CustomForm
                                            type="text"
                                            name="common_difference"
                                            onChange={handleChange}
                                            value={values.common_difference}
                                            placeholder=""
                                        />
                                        </Grid>
                                    
                                        <Grid item xs={7}><Box>No# of Observations</Box></Grid>
                                        <Grid item xs={5}>
                                            <CustomForm
                                                type="text"
                                                name="number_of_observation"
                                                onChange={handleChange}
                                                value={values.number_of_observation}
                                                placeholder=""
                                            />
                                        </Grid>                    
                                    </Grid>
                                    
                                    <Box sx={{ flexGrow: 1}}>
                                        {/* 
                                            Flex box pushes submit button down
                                        */}
                                    </Box>
                                    <Grid container={true} rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>
                                       <Grid item xs={4}>
                                            <Box sx={{display:"flex", justifyContent:"start"}}>
                                                <CustomFormBtn 
                                                type="button" 
                                                handleClick={()=>{ console.log("Clear button clicked") }} 
                                                name="Clear"/>
                                            </Box>
                                       </Grid>
                                       <Grid item xs={4}></Grid>
                                       <Grid item xs={4}>
                                            <Box sx={{display:"flex", justifyContent:"end"}}>
                                                <CustomFormBtn type="submit" name="Calculate"/>
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
                 <Box style={innerBoxStyle} >
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{height:30, width: '100%' }}></Box>
                        <Box sx={{
                                height:30, width: '100%', 
                                // backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)',
                                borderRadius: '0 10px 3px', 
                            }}></Box>
                    </Box>
                    <Box sx={{marginLeft: 5}}>
                        <Box sx={{marginBottom: 2}}>
                            <Latex displayMode={false}>{`$a_{n} = a+(n-1)d$`}</Latex>
                        </Box>
                        <Box sx={{marginBottom: 2}}>
                            <Latex displayMode={false}>{`$S_{n} = \\displaystyle \\sum_{i=1}^{10} t_i$`}</Latex>
                        </Box>
                        <Box sx={{marginBottom: 2}}>
                            <Latex displayMode={false}>{`$answer = ${value}$`}</Latex>
                        </Box>
                    </Box>
                </Box>
            </Anime>
            </Box>
        </AddLayout>
        </>
    );
}