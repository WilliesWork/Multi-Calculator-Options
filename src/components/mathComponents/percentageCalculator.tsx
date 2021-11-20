import React from 'react'
import { ThreeFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { percentageCalculatorService } from '../../services/mathService/percentageCalculatorService'
import { methodPercentageCalculator } from '../../services/methodNames/methods'

function PercentageCalculator(){
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
                     Percentage Calculator
                 </Box>
                 <ThreeFieldForm 
                 fieldName1="Percentage"
                 fieldName2="Value"
                 fieldName3="Confidence Level"
                 serviceFunction={percentageCalculatorService}
                 serviceMethodName = {methodPercentageCalculator}/>
             </Box>
         </Box>
    );
}

export { PercentageCalculator }