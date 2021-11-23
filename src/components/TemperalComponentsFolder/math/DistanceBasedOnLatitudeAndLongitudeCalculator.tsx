import React from 'react'
import { FourFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { distanceBasedOnLatitudeAndLongitudeCalculatorService } from '../../../services/mathService/distanceBasedOnLatitudeAndLongitudeCalculatorService'
import { methodDistanceBasedOnLatitudeAndLongitudeCalculator } from '../../../services/methodNames/methods'

function DistanceBasedOnLatitudeAndLongitudeCalculator(){
    return(
        <Box 
             sx={{
                 width: 1,
                 display: 'flex',
                 justifyContent: 'center',
                 marginBottom: 10,
             }}>
             <Box sx={{
                 border: 1,
                 width: 500,
                 borderRadius: 3,
                 borderColor: '#58C4A0',
                 
                 }}>
                 <Box
                     sx={{
                         textAlign: 'center',
                         fontSize: 18,
                         fontWeight: 400,
                     }}>
                     Distance Based On Latitude And Longitude Calculator
                 </Box>
                 <FourFieldForm
                 fieldName1="latitude 1"
                 fieldName2="latitude 2"
                 fieldName3="longitude 1"
                 fieldName4="longitude 2"
                 serviceFunction={distanceBasedOnLatitudeAndLongitudeCalculatorService}
                 serviceMethodName = {methodDistanceBasedOnLatitudeAndLongitudeCalculator}/>
             </Box>
         </Box>
    );
}

export default DistanceBasedOnLatitudeAndLongitudeCalculator