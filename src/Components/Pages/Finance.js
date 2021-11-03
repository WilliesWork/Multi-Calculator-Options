import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  AmortizedLoanFixedAmount,
  BondPayBackPredetermined,
  DefearedPaymentsLumpsumAtMaturity,
  InflationCalculatorCpiData,
  MortgagePayOffWithoutLoanTerm,
  MortgagePayoffWithLoanTerm,
  PayBackACertainAmount,
  PaybackWithinTimeframe,
  PresentValue,
  PresentValueOfPeriodicalDeposit,
  ProfitMarginCalculator,
  StockTradingMargin,
} from "./index";
import useStyles from "./../../Styling/CustomStyles";

function Finance() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6" className="text-center">
          FINANCIAL CALCULATORS
        </Typography>
        <hr />
      </Grid>

      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <AmortizedLoanFixedAmount />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <BondPayBackPredetermined />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <DefearedPaymentsLumpsumAtMaturity />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <InflationCalculatorCpiData />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <MortgagePayOffWithoutLoanTerm />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <MortgagePayoffWithLoanTerm />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <PayBackACertainAmount />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <PaybackWithinTimeframe />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <PresentValue />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <PresentValueOfPeriodicalDeposit />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <ProfitMarginCalculator />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper2}>
            <StockTradingMargin />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 40 }}></div>
    </Container>
  );
}

export default Finance;
