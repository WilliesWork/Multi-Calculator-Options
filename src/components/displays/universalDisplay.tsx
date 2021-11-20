import React from 'react'
import { Box} from '@mui/material'

function UniversalDisplay(props:any){
    return(
        <Box
            sx={{
                textAlign: 'center',
                fontSize: 32,
                fontWeight: 500
            }}
        >
            {props.displayData}
        </Box>
    );
}

export { UniversalDisplay }