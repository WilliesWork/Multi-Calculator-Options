import React from 'react'
import { SingleFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { sampleStandardDeviationCalculatorService } from '../../../services/mathService/sampleStandardDeviationCalculatorService'
import { methodSampleStandardDeviationCalculator } from '../../../services/methodNames/methods'

function SampleStandardDeviationCalculator(){
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
                     Sample Standard Deviation Calculatorn Calculator
                 </Box>
                 <SingleFieldForm 
                 fieldName1="Enter Numbers"
                 serviceFunction={sampleStandardDeviationCalculatorService}
                 serviceMethodName = {methodSampleStandardDeviationCalculator}/>
             </Box>
         </Box>
    );
}

export default SampleStandardDeviationCalculator