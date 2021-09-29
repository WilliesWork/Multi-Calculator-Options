// eslint-disable-next-line no-use-before-define
import React, { useEffect } from "react";
import "../../App.css";
import TopBar from "../../Common/TopBar";
import { makeStyles, TextField } from "@material-ui/core";
import { fetchGetUnits } from "../../redux/slice/GetUnits";
import { useDispatch } from "react-redux";
import { MATH_LOGO } from "../../Common/Assets/Images/Images";
import image1 from "../../Common/financial-calculator.jpg";
import { FinancialCals } from "../../Common/MathUnits";

const useStyles = makeStyles({
  // paper: {
  //   display: 'flex',
  //   flex: 1,
  //   minHeight: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   padding: 10
  // },
  paper: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },
  exchangeRates: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
  },
  currencyConverter: {
    backgroundColor: "#f5f5f5 ",
    width: "80%",
    height: "300px",
    marginLeft: "12%",
    borderRadius: "5px",
    boxShadow: "5px 3px 3px #eeeeee ",
  },
  converterContent: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: '100px'
  },
  calculatorOptions: {
    flexDirection: "column",
    marginTop: 100,
    marginLeft: "12%",
  },
});
const Home = () => {
  const {
    paper,
    currencyConverter,
    exchangeRates,
    calculatorOptions,
    converterContent,
  } = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    const bootStrap = () => {
      dispatch(fetchGetUnits());
    };
    bootStrap();
  }, []);
  return (
    <>
      <div className={paper}>
        <div className={exchangeRates}>
          <p>Dollar 22.0</p>
          <p>Pound 20.2</p>
          <p>Euro 25.6</p>
          <p>Rand 1.50</p>
        </div>
        <div className={currencyConverter}>
          <p>Calculatormap Currency Converter</p>
          <div className={converterContent}>
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
        <div className={calculatorOptions}>
          <img src={image1} alt="LOGO" />
          {FinancialCals.map((number) => {
            return <li>{number}</li>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
