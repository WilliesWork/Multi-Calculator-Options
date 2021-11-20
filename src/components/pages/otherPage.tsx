import React from 'react';
import { NavBar2 } from '../navbar/navbar2'
import { Box, Typography } from '@mui/material'
import { OtherOptions } from '../calculator/otherOptions'
import { Slide } from '../slider/slider'
import { otherRoutes } from '../../routes/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  useRouteMatch
} from "react-router-dom";



function OtherPage(){
  let { path, url } = useRouteMatch();
  const history = useHistory();

    return(
        <div>
          <NavBar2 />
          <Switch>
          <Route exact path={path}>
            <OtherOptions />
            <Slide />
          </Route>
          {otherRoutes.map((route, i) => (
                <Route key={route.name} path={route.path} >{
                    <route.component />
                }</Route>
            ))}
        </Switch>
        
      </div>
    );
}

export { OtherPage }