import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { Box } from '@mui/material'
import { useHistory } from 'react-router-dom'

var classNames = require('classnames');

function SearchForm(){

    const history = useHistory();

    const ref:any = useRef();
    const [isSearchOption, setSearchOption] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = (e: { target: any; }) => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isSearchOption && ref.current && !ref.current.contains(e.target)) {
            setSearchOption(false)
          }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isSearchOption])

    const formik = useFormik({
        initialValues:{
            search: '',
        },

        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
        }
    });

    const overLayStyleClasses = classNames({
        'app-over-lay': isSearchOption
    })

    const appOverLayDisplay = classNames({
        'app-over-lay-display': isSearchOption
    })

    const commonStyles = {
        width: 300,
        marginRight: 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderColor: '#707070', 
        color: '#707070',
        display: 'bloc'
      };

    return(
        <div>
        <Box sx={{ ...commonStyles }}>
        <div className={overLayStyleClasses} ></div>
            
            <form className="form-group d-flex justify-content-center" onSubmit={formik.handleSubmit}>
                <input
                    onFocus = { ()=> { setSearchOption(true) }}
                    id="calc-search"
                    list="data"
                    type="text"
                    className="search-input"
                    placeholder="Search for a Calculator"/>
                <button className="submit-button" type="submit">Submit</button>
            </form>
            
        </Box>
        {
            isSearchOption?
            (<Box  ref={ref} className={appOverLayDisplay}>
                <button id="search-button" className="rela" type="button" 
                onClick={()=>{ 
                        history.push("/home"); 
                    }}>test button</button>
            </Box>
            ): ""
        }
        </div>
        );
}

export { SearchForm }