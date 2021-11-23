import React from 'react'
import { ThreeFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { geometricSequencestCalculatorService } from '../../../services/mathService/geometricSequencestCalculatorService'
import { methodGeometricSequencestCalculator } from '../../../services/methodNames/methods'

function GeometricSequencestCalculator(){
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
                     Geometric Sequencest Calculator
                 </Box>
                 <ThreeFieldForm 
                 fieldName1="Common Ratio"
                 fieldName2="First Term"
                 fieldName3="nth Term"
                 serviceFunction={geometricSequencestCalculatorService}
                 serviceMethodName = {methodGeometricSequencestCalculator}/>
             </Box>
         </Box>
    );
}

export default GeometricSequencestCalculator