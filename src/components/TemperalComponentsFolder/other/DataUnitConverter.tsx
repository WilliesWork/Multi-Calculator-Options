/**
 * 
 * Form input for the area converter
 */
 import React, { useState } from 'react'
 import { UniversalConverterForm } from '../../forms/UniversalConvertorForm'
 import { dataUnitConverterUnit } from '../../../services/convertersUnits'
 import { allConverter } from '../../../services/converterService/convert'
 import { methodDataUnitConverter } from '../../../services/methodNames/methods'
 import { Box } from '@mui/material'

  const boxStyle = {
    border: 0,
    width: 1,
    p: 1,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    minHeight: 150
 }

 const innerBoxStyle = {
    width: 500,
    borderRadius: 3,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white'
 }

 const displayStyle = {
    marginLeft: 5,
    width: 500,
    height: '100%',
    borderRadius: 3,
    boxShadow: ' 0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
    minHeight: 200
}

function DisplayResult(props:any){

    return(
        <Box sx={{ ...displayStyle }}>
            <Box
                sx={{
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: 800,
                    color: '#4173B5',
                    paddingLeft: 5
                }}>
                Result
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                {
                    props.result
                }
            </Box>
        </Box>
    );
 }

 
 function DataUnitConverter(props:any){
    const [result, setResult] = useState(0)

    const getResult = (resultData:any) =>{
        console.log("This is result from AreaConverter", resultData)
        setResult(resultData)
    }
     return(
        <Box sx={{ ...boxStyle }}>
            <Box sx={{ ...innerBoxStyle }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{height:30, width: '100%' }}></Box>
                    <Box sx={{
                            height:30, width: '100%', 
                            backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)',
                            borderRadius: '0 10px 3px', 
                        }}>
                    </Box>
                </Box>
                <UniversalConverterForm 
                     unitsFunnction={dataUnitConverterUnit} 
                     convertFunction={ allConverter } 
                     convertMethod={methodDataUnitConverter} 
                     resultFunction={getResult}/>
            </Box>
            <DisplayResult result={result}/>
         </Box>
     );
 }

 /**
  * 
  * The unitsFunction prop takes in the function the is responsible for returning units from the db
  * the convertFunction prop take in the function that is repsonsible for calculating results
  * the convert method prop takes in the convertion method name
  */
 
export default DataUnitConverter