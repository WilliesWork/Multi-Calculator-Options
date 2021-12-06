import react from 'react'
import { Button } from '@mui/material'

// const buttonStyle = {
//     textTransform: 'none',
//     borderRadius: 10, 
//     width: 100, 
//     height: 30, 
//     color: 'white', 
//     backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' 
// }

export function CustomFormBtn(props:any){
    return(
        <Button
        sx={{ textTransform: 'none', borderRadius: 10, width: 100, height: 25, color: 'white', backgroundImage: 'linear-gradient(to left, #499FB8, #3128AF)' }} 
            type={props.type}
            onClick={props.handleClick}>
            { props.name }
        </Button>
    );
}