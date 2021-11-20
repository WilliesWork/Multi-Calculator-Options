import React from 'react'

import { useHistory } from 'react-router-dom'

function TestPageButton(){
    let history = useHistory()

    function handleClick(){
        history.push("/testpage")
    }
    return (
        <button type="button" onClick={handleClick}>Test Page</button>
    );
}

export { TestPageButton }

