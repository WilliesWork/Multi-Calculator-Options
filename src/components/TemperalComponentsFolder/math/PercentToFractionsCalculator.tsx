/**
 * 
 * THIS MAKES THE AVERAGE CALCULATOR FORM
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
 
  const innerBoxStyle = {
     width: 400,
     height: 300,
     borderRadius: 10,
     boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
     backgroundColor: 'white'
  }
 
 function PercentToFractionsCalculator(){
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
         <NavBar2 pagename="Percent To Fractions Calculator"/>
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
                            value: "",
                             method: "PercentToFractionsCalculator"
                         }}
                         onSubmit = {(values)=>{
                             const data = {
                                value: values.value,
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
                                 <Box sx={{  height: 250, display:'flex', flexDirection:'column' }}>
                                     <Grid container={true} rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>
 
                                         <Grid item={true} xs={5} ><Box>Value</Box></Grid>
                                         <Grid item={true} xs={7}>
                                             <CustomForm
                                                 type="text"
                                                 name="value"
                                                 onChange={handleChange}
                                                 value={values.value}
                                                 placeholder=""
                                             />
                                         </Grid>
                                                           
                                     </Grid>
                                     <Box sx={{ flexGrow: 1}}>
                                         {/* 
                                             Flex box pushes submit button down
                                         */}
                                     </Box>
 
                                    <Grid container rowSpacing={1} sx={{paddingTop:5, paddingLeft:5, paddingRight:5}}>
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
 
 export default PercentToFractionsCalculator 