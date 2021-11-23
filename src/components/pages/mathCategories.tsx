import React from 'react';
import { NavBar2 } from '../navbar/navbar2'
import { Box, Typography } from '@mui/material'
import { MathOptions } from '../calculator/mathOptions'
import { mathRoutes } from '../../routes/routes'
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
            <MathOptions />
          </Route>
          {
            mathRoutes.subCategories[0].sub_calculator.map((r:any) => {
              console.log(r.path)
              return (
                <Route key={r} path={r.path} component={r.component} />
              );
            })
          }
          {
            mathRoutes.subCategories[1].sub_calculator.map((r:any) => {
              console.log(r.path)
              return (
                <Route key={r} path={r.path} component={r.component} />
              );
            })
          }
        </Switch>
        
      </div>
    );
}

export { MathCategories }