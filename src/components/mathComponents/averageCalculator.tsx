import React from 'react'
import { SingleFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { averageCalculatorService } from '../../services/mathService/averageCalculatorService'
import { methodAverageCalculator } from '../../services/methodNames/methods'

function AverageCalculator(){
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
                     Average Calculator
                 </Box>
                 <SingleFieldForm
                 fieldName1="Enter Numbers" 
                 serviceFunction={averageCalculatorService}
                 serviceMethodName = {methodAverageCalculator}/>
             </Box>
         </Box>
    );
}

export { AverageCalculator }