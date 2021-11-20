import * as React from "react"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material'
import Link from '@mui/material/Link';
import { SearchForm } from '../forms/searchForm'
import { useHistory } from "react-router-dom";
import { Box, Grid } from '@mui/material'
import Slider from "react-slick"

function NavBar(){
        const history = useHistory();
        return(
            <Box
                sx={{
                    width: '100%',
                    paddingTop: 2,
                    marginBottom: 2
                }}>
                <div className="container">
                    <AppBar 
                        color="transparent"
                        elevation={0} 
                        sx={{
                            
                        }} 
                        position="static">

                    <Box 
                        sx={{
                            display: 'flex',
                            m: 1
                        }}>
                        <Box>
                            <Link sx={{color: "white" }} href="#" underline="none">
                                <Typography variant="h6" component="div" >
                                    <Box 
                                        sx={{
                                            color: '#8591B0'
                                        }}>
                                            CalculatorMap
                                        </Box>
                                    
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <SearchForm />
                        <button id="search-button" type="button" onClick={()=>{ history.push("/home") }}>Home</button>
                    </Box>
                    </AppBar>
                </div>
            </Box>
        );
    }


function AllCalculators(){
    const localStorageData = JSON.parse(localStorage.webdata)

    const financialCalculators = localStorageData[0].all_calucators
    const mathCalculatorsData = localStorageData[1].all_calucators
    const otherCalculatorsData = localStorageData[2].all_calucators


    return(
        <Box>
        <Box sx={{ marginBottom: 5 }}>
            <NavBar />
        </Box>
        <Box className="container">
            
            <Grid sx={{display: 'flex', justifyContent: 'center'}}  container spacing={3}>
                <Grid sx={{ display: 'flex',justifyContent: 'center'}} 
                    item xs={12} md={3}>
                        <Box sx={{
                            backgroundColor: 'transparent',
                            width: '100%'
                        }}>
                        <Box >
                            <Typography component="div">
                                <Box sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 10, 
                                        p: 1,
                                        fontSize: 14,
                                        boxShadow: ' 0 4px 20px 0px rgba(0, 0, 0, 0.2)'
                                    }}> 
                                    Financial Calculator
                                </Box>
                            </Typography>
                            {
                                financialCalculators.map((data:any) => {
                                    return (<Box sx={{ paddingLeft:4, fontSize: 18, }}> { data.name } </Box>);
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid 
                    sx={{ display: 'flex',justifyContent: 'center'}} 
                
                    item xs={12} md={3}>
                        <Box sx={{
                             backgroundColor: 'transparent',
                             width: '100%'
                        }}>
                        <Box >
                            <Typography component="div">
                                <Box sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        fontSize: 14,
                                        p: 1, 
                                        boxShadow: ' 0 4px 20px 0px rgba(0, 0, 0, 0.2)'
                                    }} > Mathematics Calculator</Box>
                            </Typography>
                            {
                                mathCalculatorsData.map((data:any) => {
                                    return (<Box sx={{ paddingLeft:4, fontSize: 18, }}> { data.name } </Box>);
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid 
                    sx={{ display: 'flex',justifyContent: 'center'}} 
                
                    item xs={12} md={3}>
                        <Box sx={{
                             backgroundColor: 'transparent',
                             width: '100%'
                        }}>
                        <Box >
                            <Typography component="div">
                                <Box sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        fontSize: 14,
                                        p: 1, 
                                        boxShadow: ' 0 4px 20px 0px rgba(0, 0, 0, 0.2)'
                                    }} > Other Calculator</Box>
                            </Typography>
                            {
                                otherCalculatorsData.map((data:any) => {
                                    return (<Box sx={{ paddingLeft:4, fontSize: 18, }}> { data.name } </Box>);
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid 
                    sx={{ display: 'flex',justifyContent: 'center'}} 
                
                    item xs={12} md={3}>
                        <Box sx={{
                             backgroundColor: 'transparent',
                             width: '100%'
                        }}>
                        <Box >
                            <Typography component="div">
                                <Box sx={{
                                        p: 1, 
                                    }} > Add </Box>
                            </Typography>
                        </Box>
                      
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
}

export { AllCalculators }