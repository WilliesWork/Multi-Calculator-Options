import React from 'react'
import { TwoFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { generalRootCalculatorService } from '../../services/mathService/generalRootCalculatorService'
import { methodGeneralRootCalculator } from '../../services/methodNames/methods'

function GeneralRootCalculator(){
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
                     General Root Calculator
                 </Box>
                 <TwoFieldForm 
                 fieldName1="Number"
                 fieldName2="Root Number"
                 serviceFunction={generalRootCalculatorService}
                 serviceMethodName = {methodGeneralRootCalculator}/>
             </Box>
         </Box>
    );
}

export { GeneralRootCalculator }