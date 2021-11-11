// eslint-disable-next-line no-use-before-define
import React from "react";
import { fetchGetUnits } from "../../redux/slice/GetUnits";
import { useDispatch } from "react-redux";

import Math from "./Main/Math";
import useStyles from './../../Styling/CustomStyles'
import "./../../Styling/App.css";

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
    </>
  );
};

export default Home;
