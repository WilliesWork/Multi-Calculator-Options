import React, { useState } from 'react'
import { SingleFieldForm } from '../../forms/GeneralForms'
import { Box } from '@mui/material'
import { averageCalculatorService } from '../../../services/mathService/averageCalculatorService'
import { methodAverageCalculator } from '../../../services/methodNames/methods'

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


function AverageCalculator(){
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
                        }}></Box>
                 </Box>
                 <SingleFieldForm
                 fieldName1="Enter Numbers" 
                 serviceFunction={averageCalculatorService}
                 serviceMethodName = {methodAverageCalculator}
                 resultFunction={getResult}/>
             </Box>
             <DisplayResult result={result}/>
         </Box>
    );
}

export default AverageCalculator 