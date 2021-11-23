import React from 'react'
import { SingleFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { dataPopulationStandardDeviationCalculatorService } from '../../../services/mathService/dataPopulationStandardDeviationCalculatorService'
import { methodDataPopulationStandardDeviationCalculatorService } from '../../../services/methodNames/methods'

function PopulationStandardDeviationCalculator(){
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
                     Population Standard Deviation Calculator
                 </Box>
                 <SingleFieldForm 
                 fieldName1="Enter Numbers Example"
                 serviceFunction={dataPopulationStandardDeviationCalculatorService}
                 serviceMethodName = {methodDataPopulationStandardDeviationCalculatorService}/>
             </Box>
         </Box>
    );
}

export default PopulationStandardDeviationCalculator