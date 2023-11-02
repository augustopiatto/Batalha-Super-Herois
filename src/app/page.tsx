"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";
import Deck from "../components/Deck";
import React from "react";
import CardInterface from "@/interfaces/CardInterface";

export default function Home() {
  const [deck, setDeck] = React.useState<CardInterface[]>([]);

  function openUserOptions() {
    return;
  }
  function routeToCards() {
    return;
  }
  async function loadDeck() {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const json = await response.json();
    setDeck(json);
  }

  React.useEffect(() => {
    loadDeck();
  }, []);

  return (
    <main>
      <AppBar position="static">
        <Toolbar className="flex relative">
          <h1 className="absolute left-1/2 translate-x-[-50%] uppercase text-2xl">
            Jornada do Herói
          </h1>
          <IconButton
            className="ml-auto"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={routeToCards}
            color="inherit"
          >
            <Icon>style</Icon>
            Cartas
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={openUserOptions}
            color="inherit"
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Deck />
    </main>
  );
}
