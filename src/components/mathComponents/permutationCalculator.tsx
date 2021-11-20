import React from 'react'
import { TwoFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { permutationCalculatorService } from '../../services/mathService/permutationCalculatorService'
import { methodPermutationCalculator } from '../../services/methodNames/methods'

function PermutationCalculator(){
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
                     Permutation Calculator
                 </Box>
                 <TwoFieldForm
                 fieldName1="Total Number"
                 fieldName2="Amount in each subset"
                 serviceFunction={permutationCalculatorService}
                 serviceMethodName = {methodPermutationCalculator}/>
             </Box>
         </Box>
    );
}

export { PermutationCalculator }