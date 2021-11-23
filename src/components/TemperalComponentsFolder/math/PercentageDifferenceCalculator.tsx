import React from 'react'
import { TwoFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { percentageDifferenceCalculatorService } from '../../../services/mathService/percentageDifferenceCalculatorService'
import { methodPercentageDifferenceCalculator } from '../../../services/methodNames/methods'

function PercentageDifferenceCalculator(){
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
                     Percentage Difference Calculator
                 </Box>
                 <TwoFieldForm 
                 fieldName1="Value 1"
                 fieldName2="Value 2"
                 serviceFunction={percentageDifferenceCalculatorService}
                 serviceMethodName = {methodPercentageDifferenceCalculator}/>
             </Box>
         </Box>
    );
}

export default PercentageDifferenceCalculator