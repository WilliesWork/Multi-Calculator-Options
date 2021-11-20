import React from 'react';
import { NavBar2 } from '../navbar/navbar2'
import { Box, Typography } from '@mui/material'
import { MathOptions } from '../calculator/mathOptions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  useRouteMatch
} from "react-router-dom";



function MathCategories(){
  let { path, url } = useRouteMatch();
  const history = useHistory();

    return(
        <div>
          <NavBar2 />
          <Switch>
          <Route exact path={path}>
           
          </Route>
        </Switch>
        <MathOptions />
      </div>
    );
}

export { MathCategories }