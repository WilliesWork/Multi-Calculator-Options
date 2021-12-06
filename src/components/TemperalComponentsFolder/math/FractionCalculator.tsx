import React, { useRef, useState, useEffect }from 'react'
import { CustomFormBtn } from '../../custom/CustomFormBtn'
import { NavBar2 } from '../../navbar/navbar2'
import CustomForm from '../../forms/CustomForm'
import { Field, Form, Formik, FormikProps } from 'formik'
import { mathMainService } from '../../../services/mathService/mathMainService'
import Anime from 'react-animejs-wrapper'
import AddLayout from '../../layouts/AddLayout'
import { Box, Grid } from '@mui/material'

const innerBoxStyle = {
    width: 400,
    height: 400,
    borderRadius: 10,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white'
 }


function FractionCalculator(){
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
        <NavBar2 pagename="Factor Calculator"/>
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
                            valuea: "",
                            valueb: "",
                            valuec: "",
                            valued: "",
                            operation:"multiply",
                            method: "FractionCalculator"
                        }}
                        onSubmit = {(values)=>{
                            const data = {
                                valuea: values.valuea,
                                valueb: values.valueb,
                                valuec: values.valuec,
                                valued: values.valued,
                                operation: values.operation,
                                method: values.method
                            }

                            console.log(data)
                            const postData = async () => {
                                const responseData = await mathMainService(data)
                                var msg:any = responseData.statusDescription;
                                if(msg === "success"){
                                    setValue(responseData.message.numerator)
                                    console.log(responseData.message.numerator)
                                }
                            }
                            postData()
                        }}>
                            
                        {(props: FormikProps<any>) => (
                            <Form>
                                  <Box sx={{  height: 350, display:'flex', flexDirection:'column' }}>
                                    <Grid container={true} rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>
                                        <Grid item={true} xs={5} ><Box>Value A</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field
                                                type="text"
                                                name="valuea"
                                            />
                                        </Grid>
                                        <Grid item={true} xs={5} ><Box>Value B</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field
                                                type="text"
                                                name="valueb"
                                            />
                                        </Grid>
                                        <Grid item={true} xs={5} ><Box>Value C</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field
                                                type="text"
                                                name="valuec"
                                            />
                                        </Grid>
                                        <Grid item={true} xs={5} ><Box>Value D</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field
                                                type="text"
                                                name="valued"
                                            />
                                        </Grid>

                                        <Grid item={true} xs={5} ><Box>Operation</Box></Grid>
                                        <Grid item={true} xs={7}>
                                            <Field as="select" name="operation" >
                                                <option value="multiply">multiply</option>
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

export default FractionCalculator