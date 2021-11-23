import React from 'react'
import { SingleFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { cubeRootCalculatorService } from '../../../services/mathService/cubeRootCalculatorService'
import { methodCubeRootCalculator } from '../../../services/methodNames/methods'

function CubeRootCalculator(){
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
                     CubeRoot Calculator Calculator
                 </Box>
                 <SingleFieldForm 
                 fieldName1="Enter Number"
                 serviceFunction={cubeRootCalculatorService}
                 serviceMethodName = {methodCubeRootCalculator}/>
             </Box>
         </Box>
    );
}

export default CubeRootCalculator