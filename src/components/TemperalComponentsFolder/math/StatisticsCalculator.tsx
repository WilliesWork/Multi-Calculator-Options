import React from 'react'
import { SingleFieldForm } from '../../forms/generalForms'
import { Box } from '@mui/material'
import { statisticsCalculatorService } from '../../../services/mathService/statisticsCalculatorService'
import { methodStatisticsCalculator } from '../../../services/methodNames/methods'

function StatisticsCalculator(){
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
                     Statistics Calculator Calculator
                 </Box>
                 <SingleFieldForm 
                    fieldName1="Enter Observations"
                    serviceFunction={statisticsCalculatorService}
                    serviceMethodName={methodStatisticsCalculator}/>
             </Box>
         </Box>
    );
}

export default StatisticsCalculator