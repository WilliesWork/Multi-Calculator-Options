/**
 * 
 * Form input for the lengthConverter
 */

import React from 'react'
import { UniversalConverterForm } from '../../forms/universalConvertorForm'
import { test } from '../../../services/convertersUnits'
import { allConverter } from '../../../services/converterService/convert'
import { methodLengthConverter } from '../../../services/methodNames/methods'
import { Box } from '@mui/material'

function LengthConverter(props:any){
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
                    Length Converter
                </Box>
                <UniversalConverterForm 
                    unitsFunnction={test} 
                    convertFunction={ allConverter } 
                    convertMethod={methodLengthConverter} />
            </Box>
        </Box>
    );
}

export { LengthConverter }