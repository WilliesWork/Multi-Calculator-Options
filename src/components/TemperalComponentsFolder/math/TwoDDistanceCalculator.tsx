import React from 'react'
import { FourFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { twoDDistanceCalculatorService } from '../../../services/mathService/twoDDistanceCalculatorService'
import { methodTwoDDistanceCalculator } from '../../../services/methodNames/methods'

function TwoDDistanceCalculator(){
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
                     2D Distance Calculator
                 </Box>
                 <FourFieldForm
                 fieldName1="x-1"
                 fieldName2="x-2"
                 fieldName3="y-1"
                 fieldName4="y-2"
                 serviceFunction={twoDDistanceCalculatorService}
                 serviceMethodName = {methodTwoDDistanceCalculator}/>
             </Box>
         </Box>
    );
}

export default TwoDDistanceCalculator