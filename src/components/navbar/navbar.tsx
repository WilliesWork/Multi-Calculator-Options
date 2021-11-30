import * as React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material'
import Link from '@mui/material/Link';
import { SearchForm } from '../forms/searchForm'
import { useHistory } from "react-router-dom";
import iconImage from '../../common/assets/icon.svg'

function NavBar(props:any){
        const history = useHistory();
        return(
            <Box
                sx={{
                    width: '100%',
                    paddingTop: 2,
                    marginBottom: 2
                }}>
                <div className="container">
                    <AppBar 
                        color="transparent"
                        elevation={0} 
                        position="static">
                    <Box 
                        sx={{
                            display: 'flex',
                            m: 1
                        }}>
                        <Box>
                            <Link sx={{color: "white" }} href="#" underline="none">
                                <Box sx={{ display: 'flex' }}>
                                    <img style={{ width: 40}} alt="icon" src={iconImage} />
                                    <Typography variant="h6" component="div" >
                                        <Box sx={{ color: '#8591B0', marginLeft: 1,paddingTop: 0.8 }}>
                                            CalculatorMap
                                        </Box>
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <SearchForm />
                        <button id="search-button" type="button" onClick={()=>{ history.push("/allcalculators") }}>All Calculators</button>
                    </Box>
                    </AppBar>
                </div>
            </Box>
        );
    }

export { NavBar }