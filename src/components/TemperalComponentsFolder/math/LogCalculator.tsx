import React from 'react'
import { TwoFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import {logCalculatorService } from '../../../services/mathService/logCalculatorService'
import { methodLogCalculator } from '../../../services/methodNames/methods'

function LogCalculator(){
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
                     Log Calculator
                 </Box>
                 <TwoFieldForm 
                 fieldName1="Base"
                 fieldName2="Number"
                 serviceFunction={logCalculatorService}
                 serviceMethodName = {methodLogCalculator}/>
             </Box>
         </Box>
    );
}

export default LogCalculator