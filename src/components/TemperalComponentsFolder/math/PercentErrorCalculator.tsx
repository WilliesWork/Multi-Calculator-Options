import React from 'react'
import { TwoFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import {percentErrorCalculatorService } from '../../../services/mathService/percentErrorCalculatorService'
import { methodPercentErrorCalculator } from '../../../services/methodNames/methods'

function PercentErrorCalculator(){
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
                     Percent Error Calculator
                 </Box>
                 <TwoFieldForm 
                 fieldName1="Observed Value"
                 fieldName2="True Value"
                 serviceFunction={percentErrorCalculatorService}
                 serviceMethodName = {methodPercentErrorCalculator}/>
             </Box>
         </Box>
    );
}

export default PercentErrorCalculator