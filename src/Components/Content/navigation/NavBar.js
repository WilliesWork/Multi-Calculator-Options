import React from "react";
import Box from "@material-ui/core/Box";
import { purple } from "@material-ui/core/colors";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { usePointNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/point";
import { Font, FontProvider } from "../../Font";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import { NestedMenuDrawer } from "..";

import AppRoutes from "./../../../routes/AppRoutes";
import useStyles from "./../../../Styling/CustomStyles";

const NavBar = React.memo(function PointNavigationMenu() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(1);

  const handleClick = (i) => (e) => {
    e.preventDefault();
    setIndex(i);
  };

  return (
    <Box height={56} display={"flex"}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* Top Nav */}
            <FontProvider fonts={[{ font: "Varela Round" }]}>
              <NavMenu useStyles={usePointNavigationMenuStyles}>
                <NavItem
                  as={"div"}
                  active={index === 0}
                  onClick={handleClick(0)}
                >
                  <Font>Home</Font>
                </NavItem>
                <NavItem
                  as={"div"}
                  active={index === 1}
                  onClick={handleClick(1)}
                >
                  <Font>Shops</Font>
                </NavItem>
                <NavItem
                  as={"div"}
                  active={index === 2}
                  onClick={handleClick(2)}
                >
                  <Font>Portfolio</Font>
                </NavItem>
                <NavItem
                  as={"div"}
                  active={index === 3}
                  onClick={handleClick(3)}
                >
                  <Font>Blog</Font>
                </NavItem>
              </NavMenu>
            </FontProvider>
            {/* End Top Nav */}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <NestedMenuDrawer />
        </Drawer>

        {/* MAIN BODY */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AppRoutes />
        </main>
        {/* END MAIN BODY */}
      </div>
    </Box>
  );
});

export default NavBar;
