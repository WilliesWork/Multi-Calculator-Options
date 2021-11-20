import React from 'react'
import { FourFieldForm } from '../forms/generalForms'
import { Box } from '@mui/material'
import { confidenceIntervalCalculatorService } from '../../services/mathService/confidenceIntervalCalculatorService'
import { methodConfidenceIntervalCalculator } from '../../services/methodNames/methods'

function ConfidenceIntervalCalculator(){
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
                     Confidence Interval Calculator
                 </Box>
                 <FourFieldForm 
                 fieldName1="Sample Size"
                 fieldName2="Sample Mean"
                 fieldName3="Stardard Deviation"
                 fieldName4="Confidence Level"
                 serviceFunction={confidenceIntervalCalculatorService}
                 serviceMethodName = {methodConfidenceIntervalCalculator}/>
             </Box>
         </Box>
    );
}

export { ConfidenceIntervalCalculator }