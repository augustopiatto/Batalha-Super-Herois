import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";

export default function Header() {
  function openUserOptions() {
    return;
  }
  function routeToCards() {
    return;
  }

  return (
    <AppBar position="static">
      <Toolbar className="flex relative">
        <h1 className="absolute left-1/2 translate-x-[-50%] uppercase text-2xl">
          Jornada do Herói
        </h1>
        <IconButton
          className="ml-auto"
          size="large"
          aria-haspopup="true"
          onClick={routeToCards}
          color="inherit"
        >
          <Icon>style</Icon>
          Cartas
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={openUserOptions}
          color="inherit"
        >
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
