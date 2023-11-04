import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";

export default function Header() {
  function openUserOptions() {
    // Só existe pra ficar bonito, não faz nada
    return;
  }
  function routeToCards() {
    // Só existe pra ficar bonito, não faz nada
    return;
  }

  return (
    <AppBar position="static">
      <Toolbar className="bg-black-dark h-20 flex relative md-m:h-auto md-m:flex md-m:flex-col md-m:gap-3">
        <h1 className="absolute left-1/2 translate-x-[-50%] uppercase text-3xl text-grey font-semibold md-m:sticky md-m:left-0 md-m:translate-x-0 md-m:text-2xl">
          Jornada do Herói
        </h1>
        <IconButton
          className="bg-black text-grey ml-auto mr-8 flex items-center gap-2 md-m:ml-0 md-m:mr-0 md-m:md-m:text-2xl"
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
