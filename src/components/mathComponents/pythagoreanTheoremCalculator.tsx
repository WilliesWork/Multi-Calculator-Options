import React from 'react'
import { SixFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { pythagoreanTheoremCalculatorService } from '../../services/mathService/pythagoreanTheoremCalculatorService'
import { methodPythagoreanTheoremCalculator } from '../../services/methodNames/methods'

function PythagoreanTheoremCalculator(){
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
                     Pythagorean Theorem Calculator
                 </Box>
                 <SixFieldForm 
                 fieldName1="A Value"
                 fieldName2="A Squared"
                 fieldName3="B Value"
                 fieldName4="B Squared"
                 fieldName5="C value"
                 fieldName6="C squared"
                 serviceFunction={pythagoreanTheoremCalculatorService}
                 serviceMethodName = {methodPythagoreanTheoremCalculator}/>
             </Box>
         </Box>
    );
}

export { PythagoreanTheoremCalculator }