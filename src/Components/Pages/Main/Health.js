import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  BloodAlcoholContent,
  BMRKatchMcArdle,
  BmrMifflinHarrisBenedict,
  BmrMifflinJeorEquation,
  BodyFatPercentageBmi,
  BodyMassIndex,
  BodyMassIndexMethodTwo,
  BoydFormulaSurfaceArea,
  DuBoisBodySurfaceArea,
  DueDateMittendorfWilliam,
  DueDateNaegeleRule,
  DueDateParikhsRule,
  DueDateWoodsRule,
  FujimotoFormulaSurfaceArea,
  GehanAndGeorgeSurfaceArea,
  HaycockBodySurfaceArea,
  InternationalSystemBfc,
  LeanBodyMass,
  LeanBodyMassPeterFormula,
  MostellerBodySurfaceArea,
  PeroidCalculator,
  ProbabilityOfASeriesOfIndpendentEvents,
  RegularCycleOvulation,
  SinglePointWithKnownSlope,
  TakaSchlichBodySurfaceArea,
  TakahiraBodySurfaceArea,
  USCustomarySystemBfc,
  WholeBodyMassFormula,
} from "../index";
import useStyles from "../../../Styling/CustomStyles";

const Health = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6" className="text-center">
          FITNESS AND HEALTH CALCULATORS
        </Typography>
        <hr />
      </Grid>

      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BloodAlcoholContent />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BMRKatchMcArdle />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BmrMifflinHarrisBenedict />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BmrMifflinJeorEquation />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BodyFatPercentageBmi />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BodyMassIndex />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BodyMassIndexMethodTwo />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BoydFormulaSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BodyFatPercentageBmi />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DuBoisBodySurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DueDateMittendorfWilliam />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DueDateNaegeleRule />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DueDateParikhsRule />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DueDateWoodsRule />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <FujimotoFormulaSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <GehanAndGeorgeSurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <HaycockBodySurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <InternationalSystemBfc />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <LeanBodyMass />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <LeanBodyMassPeterFormula />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <MostellerBodySurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <PeroidCalculator />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <RegularCycleOvulation />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <TakaSchlichBodySurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <TakahiraBodySurfaceArea />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <USCustomarySystemBfc />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <WholeBodyMassFormula />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 40 }}></div>
    </Container>
  );
};

export default Health;
