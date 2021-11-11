import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import useStyles from "../../../Styling/CustomStyles";
import {
  CircleArea,
  ConeArea,
  CubeArea,
  CylindricalTank,
  EllipseArea,
  ParallelogramArea,
  RectangularArea,
  SectorArea,
  TrapezoidArea,
  TriangleArea,
  BallSurfaceArea,
  CapsuleSurfaceArea,
  ConicalFrustrumSurfaceArea,
  EllipsoidSurfaceArea,
  SphericalCapSurfaceArea,
  SquarePyramidSurfaceArea,
  CapsuleVolume,
  ConeVolume,
  ConicalFrustumVolume,
  CubeVolume,
  CylinderVolume,
  EllipsoidVolume,
  RectangularTankVolume,
  SphereVolume,
  SphericalCapVolume,
  SquarePyramidVolume,
  TubeVolume,
} from "../index";

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
        <Grid item xs={8}>
          <Paper className={classes.paperBackground}>
            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <BallSurfaceArea />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <CapsuleSurfaceArea />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <ConicalFrustrumSurfaceArea />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <EllipsoidSurfaceArea />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <SphericalCapSurfaceArea />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper2}>
                <SquarePyramidSurfaceArea />
              </Paper>
            </Grid>
          </Paper>
        </Grid>

        {/* Ad Grid */}
        <Grid item xs={4}>
          <Paper className={classes.paper2}>Ad</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SurfaceArea;
