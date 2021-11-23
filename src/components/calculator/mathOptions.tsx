import React from 'react'
import { Grid, Typography, Box, Container } from '@mui/material'
import { Slide } from '../slider/slider'
import { useHistory } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import iconImage from '../../common/assets/icon.svg';
import iconLine from '../../common/assets/line.svg';
import Slider from "react-slick";
import { mathRoutes } from '../../routes/routes'

function MathOptions(){
    const localStorageData = JSON.parse(localStorage.webdata)
    const history = useHistory()

    // const mathCategoriesData = localStorageData[1].sub_categories
    const mathCategoriesData = mathRoutes
    console.log(mathCategoriesData);
    const boxStyle = {
        border: 0,
        backgroundColor: 'transparent',
        maxWidth: 240,
        height: 250,
        borderRadius: 3,
        paddingTop: 1,
        paddingLeft: 3,
        textOverFlow: 'ellipsis',
    
        // boxShadow: ' 0 10px 8px 0px rgba(0, 0, 0, 0.2)'
      }

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    return(
        <div  className="container mt-4">
        <Slider  {...settings}>
            <Box sx={{...boxStyle }}>
                <Box sx={{ 
                    paddingLeft: 2,
                    width: '100',
                    backgroundColor: 'white',
                    borderRadius: 5, 
                    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
                    }} >  
                    <p style={{ marginTop: 5 }}>Fraction Calculators</p>
                </Box>
                <Box className="general-text-box" sx={{ paddingLeft: 2 }}>
                    {
                        mathRoutes.subCategories[0].sub_calculator.map((r:any) => {
                            return (<Box className="div-link" onClick={()=>{ history.push(r.path) }} sx={{ width: 230, paddingBottom: 0.5,  fontSize: 16, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}> {r.name} </Box>);
                        })
                    }
                </Box>
            </Box>
            <Box sx={{...boxStyle }}>
                <Box sx={{ 
                    paddingLeft: 2,
                    width: '100',
                    backgroundColor: 'white',
                    borderRadius: 5, 
                    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
                    }} >  
                    <p style={{ marginTop: 5 }}>General Calculators</p>
                </Box>
                <Box className="general-text-box" sx={{ paddingLeft: 2 }}>
                    {
                        mathRoutes.subCategories[1].sub_calculator.map((r:any) => {
                            return (<Box className="div-link" onClick={()=>{ history.push(r.path) }} sx={{ width: 230, paddingBottom: 0.5,  fontSize: 16, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}> {r.name} </Box>);
                        })
                    }
                </Box>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Slider>
        <Box >
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
        </Box>
        <Box >
            <Box sx={{
                        width: '100%',
                        borderRadius: 3,
                        color: "black",
                        paddingBottom: 0.5,
                    }}>
                
                <Slide/>
            </Box>
        </Box>
        </div>
    );
}

export { MathOptions }