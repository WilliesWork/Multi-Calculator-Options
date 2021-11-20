import React from 'react'
import { SingleFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { greatestCommonFactorCalculatorService } from '../../services/mathService/greatestCommonFactorCalculatorService'
import { methodGreatestCommonFactorCalculator } from '../../services/methodNames/methods'

function GreatestCommonFactorCalculator(){
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
                     Greatest Common Factor Calculator
                 </Box>
                 <SingleFieldForm
                 fieldName1="Factors"
                 serviceFunction={greatestCommonFactorCalculatorService}
                 serviceMethodName = {methodGreatestCommonFactorCalculator}/>
             </Box>
         </Box>
    );
}

export { GreatestCommonFactorCalculator }