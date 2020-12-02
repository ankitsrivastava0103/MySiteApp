import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header({ status }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {status === true
              ? "Enter The Code"
              : "Login With Your Mobile Phone"}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
