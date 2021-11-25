import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import useStyles from "../../../Styling/CustomStyles";
import { CollapsibleMenu } from "./../../Content";
import { CALCULATORS } from "./../../../Common/shared";
import {
  BallSurfaceArea,
  CapsuleSurfaceArea,
  ConeSurfArea,
  ConicalFrustrumSurfaceArea,
  CubeSurfArea,
  CylindricalTankSurfArea,
  EllipsoidSurfaceArea,
  SphericalCapSurfaceArea,
  SquarePyramidSurfaceArea,
} from "../index";
import { CustomTabs, ResultTabs, CalculatorTabs } from "../../custom";
import CalculatorLayout2 from "./../../custom/CalculatorLayout2";
import { circleAreaCalculator } from "./../../../Lib/Calculators";

function SurfaceArea() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CalculatorLayout2 template={circleAreaCalculator} />
    </Container>
  );
}

export default SurfaceArea;
