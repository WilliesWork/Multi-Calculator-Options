import React from 'react'
import { Box, Grid } from '@mui/material'
import SpecifiedSearchForm from '../forms/SpecifiedSearchForm'
import { SingleSlider } from '../slider/SingleSlider'
import { NavBar2 } from '../navbar/navbar2'


export default function AddLayout({children}:any){
    return(
        <>
            <Box 
                sx={{
                    border: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }} 
                className="container"> 
                <Grid sx={{border: 0, borderColor: 'red', width: '100%'}} container spacing={2}>
                    <Grid item xs={9}>
                        {children}
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{border: 0, borderColor: 'blue', height: 250 }}>
                            <SingleSlider/>
                        </Box>
                        <Box>
                            <SpecifiedSearchForm/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}