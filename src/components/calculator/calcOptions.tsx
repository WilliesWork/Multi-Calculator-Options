import React from 'react'
import { Grid, Typography, Box, Container } from '@mui/material'
import { Slide } from '../slider/slider'
import { useHistory } from "react-router-dom";
import iconImage from '../../common/assets/icon.svg';
import iconLine from '../../common/assets/line.svg';

function CalcOptions(){
    const localStorageData = JSON.parse(localStorage.webdata)
    const history = useHistory();

    console.log("localdata")
    console.log(localStorageData)

    const financeCategoryList = localStorageData[0].sub_categories
    const mathCategoryList = localStorageData[1].sub_categories
    const otherCategoryList = localStorageData[2].sub_categories

    const commonStyles = {
        width: '90%',
        m: 1,
        color: "white",
        paddingTop: 0.5,
        paddingBottom: 0.5,
      };

      const headerStyles = {
        color: '#707070',
        textAlign: 'center', 
        fontWeight: 'bold', 
        m: 1, 
      };

      const boxStyle = {
        backgroundColor: 'white',
        width: 280,
        height: 300,
        borderRadius: 3,
        paddingTop: 1,
        paddingLeft: 3,
        paddingBottom: 0.5,
        boxShadow: ' 0 10px 8px 0px rgba(0, 0, 0, 0.2)'
      }

      const centerBoxStyle = {
        display: 'flex',
        justifyContent: 'center',
        
      }

    return(
        <Container className="container mt-4">
            
            <Box className="d-flex justify-content-center">
                <Grid container spacing={4}>
                    <Grid sx={{ ...centerBoxStyle }} item xs={12} md={4}>
                            <Box onClick={() =>  { history.push('/financepage') }} className="div-link" sx={{ ...boxStyle }}>

                                {/* image and button name */}

                                <Box sx={{ height: 50, fontSize: 22}} >
                                    <p style={{ marginTop: 5 }}><img style={{  verticalAlign: 'baseline', marginRight: 4, width: 40, }} alt="icon" src={iconImage} />Financial</p>
                                </Box>


                               <Box sx={{ height: 180, overflow: 'hidden'}}>
                                { financeCategoryList.map((data:any, i:any)=>(
                                        <Box sx={{ width: 230, color: '#8591B0', paddingBottom: 0.5,  fontSize: 16,overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}> {data.name} </Box>
                                ))}
                               </Box>
                            </Box>
                    </Grid>
                    <Grid sx={{ ...centerBoxStyle }} item xs={12} md={4}>
                        <Box onClick ={ ()=> { history.push('/mathcategories') }} className="div-link" sx={{ ...boxStyle }}>
                            {/* image and button name */}

                                <Box sx={{ height: 50,  fontSize: 22 }} >
                                    <p style={{ marginTop: 5 }}><img style={{  verticalAlign: 'baseline', marginRight: 4, width: 40}} alt="icon" src={iconImage} />Mathematics</p>
                                </Box>
                                { mathCategoryList.map((data:any, i:any)=>(
                                        <Box sx={{ width: 230, color: '#8591B0', paddingBottom: 0.5,  fontSize: 16,overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}> {data.name} </Box>
                                        ))}

                        </Box>
                    </Grid>
                    <Grid sx={{ ...centerBoxStyle }} item xs={12} md={4}>
                        <Box onClick ={ ()=> { history.push('/otherpage') }} className="div-link" sx={{ ...boxStyle }}>
                             {/* image and button name */}

                                <Box sx={{ height: 50,  fontSize: 22}} >
                                    <p style={{ marginTop: 5 }}><img style={{  verticalAlign: 'baseline', marginRight: 4, width: 40}} alt="icon" src={iconImage} />Other</p>
                                </Box>
                                { otherCategoryList.map((data:any, i:any)=>(
                                        <Box sx={{ width: 230, color: '#8591B0', paddingBottom: 0.5,  fontSize: 16,overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}> {data.name} </Box>
                                    ))}
                        </Box>
                    </Grid>
                    <Grid className="container" item xs={12} md={12} >
                        <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    p: 1,
                                    width: '100%',
                                    borderRadius: 3,
                                    textAlign: 'center',
                                    fontSize: 24,
                                    color: '#8591B0',
                                    // boxShadow: ' 0 8px 8px 0 rgba(0, 0, 0, 0.2)'
                                }}>
                            <Box>
                                <img style={{ width: '100%' }}  alt="lineIcon" src={iconLine} />
                            </Box>
                            <p style={{ marginLeft: 30, marginRight: 30 }}>Advertisement</p>
                            <Box>
                                <img style={{ width: '100%' }}  alt="lineIcon" src={iconLine} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="" item xs={12} md={12} >
                        <Box sx={{
                                    width: '100%',
                                    borderRadius: 3,
                                    color: "black",
                                    paddingBottom: 0.5,
                                }}>
                            
                            <Slide/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
    );
}

export { CalcOptions }