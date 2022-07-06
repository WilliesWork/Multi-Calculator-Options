import React from 'react'
import { Box } from "@mui/material"
import Slider from "react-slick"

function MathOptions(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return(
        <Slider className="slick-test" {...settings}>
                <div>
                    <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>1</h3> </Box>
                </div>
                <Box >
                    <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>2</h3> </Box>
                </Box>
                <div>
                <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>3</h3></Box>
                </div>
                <div>
                <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>4</h3> </Box>
                </div>
                <div>
                <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>5</h3> </Box>
                </div>
                <div>
                <Box sx={{
                        border: 1,
                        borderColor: 'red',
                        marginRight: 1,
                        textAlign: 'center',
                    }}> <h3>6</h3> </Box>
                </div>
            </Slider>
      );
}

export { MathOptions }