import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { ConcreteSquareFooting } from "./index";
import useStyles from "./../../Styling/CustomStyles";

function Other() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6" className="text-center">
          OTHER CALCULATORS
        </Typography>
        <hr />
      </Grid>

      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <ConcreteSquareFooting />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 40 }}></div>
    </Container>
  );
}

export default Other;
