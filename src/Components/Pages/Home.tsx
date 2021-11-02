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
      <Math />

      {/* <Health />

      <Statistics /> */}
    </>
  );
};

export default Home;
