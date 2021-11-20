import React from 'react';
import { NavBar2 } from '../navbar/navbar2'
import { Box, Typography } from '@mui/material'
import { Slide } from '../slider/slider'
import { FinanceOptions } from '../calculator/financeOptions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from "react-router-dom";



function FinancePage(){
  let { path, url } = useRouteMatch();

    return(
        <div>
          <NavBar2 />

          <Switch>
          <Route exact path={path}>
            <FinanceOptions />
          </Route>
          <Route path={`${path}/test`}>
          
          </Route>
        </Switch>
        <Slide />
      </div>
    );
}

export { FinancePage }