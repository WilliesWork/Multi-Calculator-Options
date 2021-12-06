import React, { useRef, useState, useEffect } from 'react'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'
import { CustomFormBtn } from '../../custom/CustomFormBtn'
import { NavBar2 } from '../../navbar/navbar2'

const innerBoxStyle = {
    width: 400,
    height: 300,
    borderRadius: 10,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white'
 }


function PercentageChangeCalculator(){
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
        <NavBar2 pagename="Percentage Change Calculator"/>
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
                            type: "decrease",
                            method: "PercentageChangeCalculator"
                        }}
                        onSubmit = {(values)=>{
                            const data = {
                                percentage: values.percentage,
                                value: values.value,
                                type: values.type,
                                method: values.method
                            }
                            console.log(data)
                            const postData = async () => {
                                const responseData = await mathMainService(data)
                                var msg:any = responseData.statusDescription;
                                if(msg === "success"){
                                    setValue(responseData.message.result)
                                    console.log(responseData.message.result)
                                }
                            }
                            postData()
                        }}>
                            
                        {(props: FormikProps<any>) => (
                            <Form >
                                <Box sx={{  height: 250, display:'flex', flexDirection:'column' }}>
                                    <Grid container={true} rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>

                                        <Grid item={true} xs={5} ><Box>Percentage</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field
                                                type="text"
                                                name="percentage"
                                            />
                                        </Grid>
                
                                        <Grid item xs={5}><label style={{ marginRight: 10 }}>Value</label></Grid>
                                        <Grid item xs={7}>
                                        <Field
                                            type="text"
                                            name="value"
                                        />
                                        </Grid>

                                        
                                        <Grid item xs={5}><label style={{ marginRight: 10 }}>Type</label></Grid>
                                        <Grid item xs={7}>
                                            <Field
                                                as="select"
                                                name="type"
                                            >
                                                <option value="red">decrease</option>
                                                <option value="red">increae</option>
                                            </Field>
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
                                                handleClick={()=>{ 
                                                    play1();
                                                    play2();
                                                 }} 
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
                            </Form>
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
                 <Box style={innerBoxStyle}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{height:30, width: '100%' }}></Box>
                        <Box sx={{
                                height:30, width: '100%', 
                                // backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)',
                                borderRadius: '0 10px 3px', 
                            }}></Box>
                    </Box>
                    <Box sx={{marginLeft: 5}}>
                        <h5>Display Answer</h5>
                        <p>{value}</p>
                    </Box>
                </Box>
            </Anime>
            
            </Box>
            
        </AddLayout>
        </>
    );
}

export default PercentageChangeCalculator