import React from 'react'
import { SingleFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { meanMedianModeRangeCalculatorService } from '../../services/mathService/meanMedianModeRangeCalculatorService'
import { methodMeanMedianModeRangeCalculator } from '../../services/methodNames/methods'

function MeanMedianModeRangeCalculator(){
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
                     Mean Median Mode Range Calculator
                 </Box>
                 <SingleFieldForm
                 fieldName1="Number"
                 serviceFunction={meanMedianModeRangeCalculatorService}
                 serviceMethodName = {methodMeanMedianModeRangeCalculator}/>
             </Box>
         </Box>
    );
}

export { MeanMedianModeRangeCalculator }