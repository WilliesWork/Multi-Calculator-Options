/**
 * 
 * Form input for the area converter
 */
 import React from 'react'
 import { UniversalConverterForm } from '../../forms/universalConvertorForm'
 import { timeConverterUnit } from '../../../services/convertersUnits' // gets units
 import { allConverter } from '../../../services/converterService/convert'
 import { methodTimeConverter } from '../../../services/methodNames/methods'
 import { Box } from '@mui/material'
 
 function TimeConverter(props:any){
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
                     Time Converter
                 </Box>
                 <UniversalConverterForm 
                     unitsFunnction={timeConverterUnit} 
                     convertFunction={ allConverter } 
                     convertMethod={methodTimeConverter} />
             </Box>
         </Box>
     );
 }

 /**
  * 
  * The unitsFunction prop takes in the function the is responsible for returning units from the db
  * the convertFunction prop take in the function that is repsonsible for calculating results
  * the convert method prop takes in the convertion method name
  */
 
 export { TimeConverter }