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

function SurfaceArea() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="subtitle2" className="text-center">
        | Surface Area Calculator
      </Typography>
      <hr />
      <Grid container xs={12}>
        {/* Calculator Grid */}
        <Grid item xs={6}>
          <Paper className={classes.paperBackground}>
            <CalculatorTabs tabTitle='Calculator title' />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paperBackground}>
            <ResultTabs />
          </Paper>
        </Grid>

        {/* Ad Grid */}
        <Grid item xs={2}>
          <Paper className={classes.paper2}>
            <CollapsibleMenu />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SurfaceArea;
