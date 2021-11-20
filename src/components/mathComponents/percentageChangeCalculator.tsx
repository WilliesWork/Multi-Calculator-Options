import React from 'react'
import { ThreeFieldFormWithOptions } from '../forms/generalForms'
import { Box } from '@mui/material'
import { percentageChangeCalculatorService } from '../../services/mathService/percentageChangeCalculatorService'
import { methodPercentageChangeCalculator } from '../../services/methodNames/methods'

function PercentageChangeCalculator(){
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
                     Percentage Change Calculator Calculator
                 </Box>
                 <ThreeFieldFormWithOptions
                 fieldName1="Percentage"
                 fieldName2="Value"
                 fieldName3="Select Type"
                 feildOptions={["Select Type","decrease"]}
                 serviceFunction={percentageChangeCalculatorService}
                 serviceMethodName = {methodPercentageChangeCalculator}/>
             </Box>
         </Box>
    );
}

export { PercentageChangeCalculator }