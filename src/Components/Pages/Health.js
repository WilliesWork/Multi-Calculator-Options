import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { BodyMassIndex, LeanBodyMass, RegularCycleOvulation } from "./index";
import useStyles from "./../../Styling/CustomStyles";

const Health = () => {
  const classes = useStyles;
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h6" className="text-center">
          FITNESS AND HEALTH CALCULATORS
        </Typography>
        <hr />
      </Grid>

      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BodyMassIndex />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <LeanBodyMass />
          </Paper>
        </Grid>

        <hr />

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <RegularCycleOvulation />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 40 }}></div>
    </Container>
  );
};

export default Health;
