import React from 'react'
import { TwoFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { combinationsCalculatorService } from '../../../services/mathService/combinationsCalculatorService'
import { methodCombinationsCalculator } from '../../../services/methodNames/methods'

function CombinationsCalculator(){
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
                     Combinations Calculator
                 </Box>
                 <TwoFieldForm
                 fieldName1="Total Number"
                 fieldName2="Amount in each subset"
                 serviceFunction={combinationsCalculatorService}
                 serviceMethodName = {methodCombinationsCalculator}/>
             </Box>
         </Box>
    );
}

export default CombinationsCalculator