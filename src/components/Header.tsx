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
    <AppBar className="z-10">
      <Toolbar className="bg-black-dark h-20 flex relative">
        <h1 className="absolute left-1/2 translate-x-[-50%] uppercase text-3xl text-grey font-semibold">
          Jornada do Herói
        </h1>
        <IconButton
          className="bg-black text-grey ml-auto mr-8 flex items-center gap-2"
          size="large"
          onClick={routeToCards}
          sx={{
            borderRadius: "16px",
            padding: "0px 16px",
            "&:hover": {
              backgroundColor: "rgb(71, 117, 236)",
            },
          }}
        >
          <Icon>style</Icon>
          Cartas
        </IconButton>
        <IconButton size="large" onClick={openUserOptions}>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
