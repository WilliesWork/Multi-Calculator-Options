import React, { useState, useEffect, useRef } from 'react'// requires a loader
import Slider from "react-slick"
import addimage from '../../common/assets/add.svg'


import { Button, Paper, Box } from '@mui/material'


class Slide extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
            <Slider className="container" {...settings}>
                <div>
                    <Box sx={{
                        marginRight: 1,
                        display: 'flex',
                        justifyContent: 'start'
                    }}> <img style={{ width: 100 }} src={addimage} alt="add"  /></Box>
                </div>
                <Box >
                    <Box sx={{
                        marginRight: 1,
                        display: 'flex',
                        justifyContent: 'center'
                    }}> <img style={{ width: 100 }} src={addimage} alt="add"  /> </Box>
                </Box>
                <div>
                <Box sx={{
                        marginRight: 1,
                        textAlign: 'end',
                        display: 'flex',
                        justifyContent: 'end'
                    }}> <img style={{ width: 100 }} src={addimage} alt="add" /> </Box>
                </div>
            </Slider>
      );
    }
  }

export { Slide }