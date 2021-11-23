import React from 'react'
import { SingleFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { leastCommonMultipleCalculatorService } from '../../../services/mathService/leastCommonMultipleCalculatorService'
import { methodLeastCommonMultipleCalculator } from '../../../services/methodNames/methods'

function LeastCommonMultipleCalculator(){
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
                     Least Common Multiple Calculator
                 </Box>
                 <SingleFieldForm
                 fieldName1="Factors"
                 serviceFunction={leastCommonMultipleCalculatorService}
                 serviceMethodName = {methodLeastCommonMultipleCalculator}/>
             </Box>
         </Box>
    );
}

export default LeastCommonMultipleCalculator