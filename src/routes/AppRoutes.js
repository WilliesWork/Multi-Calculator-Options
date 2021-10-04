import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Home,
  BallSurfaceArea,
  RectangularSurfaceArea,
  ConeSurfaceArea,
  CubeSurfaceArea,
  CylindricalTank,
  Math,
} from "./../Components/Pages";

function AppRoutes() {
  const pages = [
    {
      component: Home,
      path: "/",
      name: "Home",
    },
    {
      component: Math,
      path: "/math",
      name: "Math Calculators",
    },
    {
      component: RectangularSurfaceArea,
      path: "/MathStack/RectangularSurfaceArea",
      name: "Product Details",
    },
    {
      component: BallSurfaceArea,
      path: "/MathStack/BallSurfaceArea",
      name: "Product Details",
    },
  ];

  return (
    <Switch>
      {pages.map((item) => {
        const { component, path, name } = item;
        return (
          <Route
            key={item}
            path={path}
            pageName={name}
            exact
            component={component}
          />
        );
      })}
    </Switch>
  );
}

export default AppRoutes;
