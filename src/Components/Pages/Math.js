import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./../../Styling/CustomStyles";
import {
  ConeSurfaceArea,
  CubeSurfaceArea,
  CylindricalTank,
  RectangularSurfaceArea,
  BallSurfaceArea,
  CapsuleSurfaceArea,
  SphericalCapSurfaceArea,
  SquarePyramidSurfaceArea,
  EllipsoidSurfaceArea,
  ConicalFrustrumSurfaceArea,
} from "./index";

const Math = () => {
  const classes = useStyles;
  return (
    <Container>
      <Typography variant="h6" className="text-center">
        MATH CALCULATORS
      </Typography>
      <hr />

      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <ConeSurfaceArea />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <CubeSurfaceArea />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <CylindricalTank />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <RectangularSurfaceArea />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BallSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <CapsuleSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <SphericalCapSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <ConicalFrustrumSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <SquarePyramidSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <EllipsoidSurfaceArea />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 40 }}></div>
    </Container>
  );
};

export default Math;
