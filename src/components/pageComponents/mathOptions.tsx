import React from 'react'
// import Slider from "react-slick"
import { Box, Container, Typography } from "@mui/material"
import Slider from "react-slick"

function MathOptions(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      const styles = {
        paddingLeft:4, fontSize: 18,
      }

      const headerStyles = {
        backgroundColor: 'white',
        borderRadius: 10, 
        p: 1,
        fontSize: 14,
        boxShadow: ' 0 4px 20px 0px rgba(0, 0, 0, 0.2)'
      }

      const coverBoxStyle = {
        width: 270,
      }

      const namesBoxStyles = {
        overflow:'hidden',
        height: 270,
      }

      const displayStyle = {
          display: 'flex',
          justifyContent: 'flex-start'
      }

      return(
        <Container>
            <Slider className="slick-test" {...settings}>
                <Box sx={{ ...displayStyle }}>
                    <Box sx={{ ...coverBoxStyle }}>
                        <Typography component="div">
                            <Box sx={{ ...headerStyles }}> 
                                Math Category
                            </Box>
                        </Typography>
                        <Box sx={{ ...namesBoxStyles }}>
                            <Box sx={{...styles }} > Calculator Name </Box>
                            <Box sx={{...styles }} > Calculator Name </Box>
                        </Box>
                    </Box>
                </Box>
                <div>
                    <Box sx={{ ...coverBoxStyle }}>
                        <Typography component="div">
                            <Box sx={{ ...headerStyles }}> 
                                Math Category
                            </Box>
                        </Typography>
                        <Box sx={{ ...namesBoxStyles }}>
                            <Box sx={{...styles }} > Calculator Name </Box>
                            <Box sx={{...styles }} > Calculator Name </Box>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box sx={{ ...coverBoxStyle }}>
                        <Typography component="div">
                            <Box sx={{ ...headerStyles }}> 
                                Math Category
                            </Box>
                        </Typography>
                        <Box sx={{ ...namesBoxStyles }}>
                            <Box sx={{...styles }} > Calculator Name </Box>
                            <Box sx={{...styles }} > Calculator Name </Box>
                        </Box>
                    </Box>
                </div>
            </Slider>
        </Container>
      );
}

export { MathOptions }