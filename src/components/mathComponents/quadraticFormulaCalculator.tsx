import React from 'react'
import { ThreeFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { quadraticFormulaCalculatorService } from '../../services/mathService/quadraticFormulaCalculatorService'
import { methodQuadraticFormulaCalculator } from '../../services/methodNames/methods'

function QuadraticFormulaCalculator(){
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
                     Quadratic Formula Calculator
                 </Box>
                 <ThreeFieldForm
                 fieldName1="Value A"
                 fieldName2="Value B"
                 fieldName3="Value C"
                 serviceFunction={quadraticFormulaCalculatorService}
                 serviceMethodName = {methodQuadraticFormulaCalculator}/>
             </Box>
         </Box>
    );
}

export { QuadraticFormulaCalculator }