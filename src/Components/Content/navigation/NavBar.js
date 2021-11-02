import React from "react";
import Box from "@material-ui/core/Box";
import { purple } from "@material-ui/core/colors";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { usePointNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/point";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

import useStyles from "./../../../Styling/CustomStyles";
import { Font, FontProvider } from "../../Font";
const NavBar = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleClick = (i, path) => (e) => {
    e.preventDefault();
    history.push(path);
    setIndex(i);
  };

  const navLinks = [
    {
      linkName: "Math",
      tag: "div",
      idx: 0,
      onClick: handleClick(0, "/"),
    },
    {
      linkName: "Fitness and Health",
      tag: "div",
      idx: 1,
      onClick: handleClick(1, "/fitness&health"),
    },
    {
      linkName: "Statistics",
      tag: "div",
      idx: 2,
      onClick: handleClick(2, "/statistics"),
    },
  ];

  return (
    <Box height={46} display={"flex"}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* Top Nav */}
            <FontProvider fonts={[{ font: "Varela Round" }]}>
              <NavMenu useStyles={usePointNavigationMenuStyles}>
                {navLinks.map((item) => {
                  const { linkName, tag, idx, onClick } = item;
                  return (
                    <NavItem as={tag} active={index === idx} onClick={onClick}>
                      <Font>{linkName}</Font>
                    </NavItem>
                  );
                })}
              </NavMenu>
            </FontProvider>
            {/* End Top Nav */}
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default withRouter(NavBar);
