import React, { useState } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material'
import Link from '@mui/material/Link';
import { SearchForm } from '../forms/searchForm';
import { useHistory } from 'react-router-dom'
const classNames = require('classnames');

function NavBar2(props:any){
    var mathHighLight = props.mathHighLight;
    var financialHighLight = props.financialHighLight;
    var otherHighLight = props.otherHighLight;

    var buttonStylesMath = classNames({
        'search-button-2': true,
        'search-button-math': mathHighLight ? true : false,
    })

    var buttonStylesOther = classNames({
        'search-button-2': true,
        'search-button-other': otherHighLight ? true : false,
    })

    var buttonStylesFinancial = classNames({
        'search-button-2': true,
        'search-button-financial': financialHighLight ? true : false,
    })

    const history = useHistory()
        return(
            <Box
                className="container"
                sx={{
                    width: '100%',
                    paddingTop: 2,
                    marginBottom: 2
                }}>
                <div>
                    <AppBar 
                        color="transparent"
                        elevation={0} 
                        sx={{
                            
                        }} 
                        position="static">

                    <Box 
                        sx={{
                            display: 'flex',
                            m: 1
                        }}>
                        <Box>
                            <Link sx={{color: "white" }} href="#" underline="none">
                                <Typography variant="h6" component="div" >
                                    <Box 
                                        sx={{
                                            color: '#8591B0'
                                        }}>
                                            {props.pagename}
                                        </Box>
                                    
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <button onClick={()=>{ history.push("/financepage") }} className={buttonStylesFinancial} type="button">Financial</button>
                        <button onClick={()=>{ history.push("/mathcategories") }} className={buttonStylesMath} type="button">Mathematics</button>
                        <button onClick={()=>{ history.push("/otherpage") }} className={buttonStylesOther} type="button">Other</button>
                        <button onClick={()=>{ history.push('/home') }} className="search-button-1" type="button">Home</button>
                    </Box>
                    </AppBar>
                </div>
                <Box>
                </Box>
            </Box>
        );
    }

export { NavBar2 }