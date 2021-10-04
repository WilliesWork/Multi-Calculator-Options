// eslint-disable-next-line no-use-before-define
import React from "react";
import "./../../Styling/App.css";
import { TextField } from "@material-ui/core";
import { fetchGetUnits } from "../../redux/slice/GetUnits";
import { useDispatch } from "react-redux";
import { MATH_LOGO } from "../../Common/Assets/Images/Images";
import image1 from "../../Common/financial-calculator.jpg";
import { FinancialCals } from "../../Common/MathUnits";

import Math from "./Math";
import Health from './Health'
import Statistics from './Statistics'
import useStyles from './../../Styling/CustomStyles'

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const bootStrap = () => {
      dispatch(fetchGetUnits());
    };
    bootStrap();
  }, []);
  return (
    <>
      {/* <div className={classes.paper}>
        <div className={classes.exchangeRates}>
          <p>Dollar 22.0</p>
          <p>Pound 20.2</p>
          <p>Euro 25.6</p>
          <p>Rand 1.50</p>
        </div>
        <div className={classes.currencyConverter}>
          <p>Calculatormap Currency Converter</p>
          <div className={classes.converterContent}>
            <p>Amount</p>
            <TextField
              label="Amount"
              id="radiusValue"
              name="radius"
              placeholder="0.0"
              variant="outlined"
              size="small"
            />

            <p>From</p>
            <TextField
              label="Amount"
              id="radiusValue"
              name="radius"
              placeholder="0.0"
              variant="outlined"
              size="small"
            />
            <p>To</p>
            <TextField
              label="Amount"
              id="radiusValue"
              name="radius"
              placeholder="0.0"
              variant="outlined"
              size="small"
            />

          </div>
        </div>
        <div className={classes.calculatorOptions}>
          <img src={image1} alt="LOGO" />
          {FinancialCals.map((number) => {
            return <li>{number}</li>;
          })}
        </div>
      </div> */}

      <Math />

      <Health />

      <Statistics />
    </>
  );
};

export default Home;
