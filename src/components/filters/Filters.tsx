import React from "react";
import SearchName from "./SearchName";
import Button from "@mui/material/Button";
import { HeroesContext } from "@/contexts/HeroesContext";

export default function Filter() {
  const [opened, setOpened] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string | null>(null);

  const { deck, setFilteredDeck } = React.useContext(HeroesContext);

  function openMenu() {
    setOpened(!opened);
  }
  function applyFilters() {
    if (name) {
      const filteredHero = deck.filter((hero) => hero.name === name);
      setFilteredDeck(filteredHero);
    } else {
      setFilteredDeck(deck);
    }
    return;
  }

  return (
    <div className="absolute top-5 right-0 flex">
      <Button
        className="items-start h-10 bg-slate-300 "
        sx={{ borderRadius: "4px 0px 0px 4px" }}
        onClick={() => {
          openMenu();
        }}
      >
        Filtros
      </Button>
      {opened && (
        <div className="bg-slate-300 w-[300px] h-[500px] p-5 flex flex-col">
          <SearchName deck={deck} setName={setName} />
          <Button
            className="h-10 bg-slate-300 "
            onClick={() => {
              applyFilters();
            }}
          >
            Aplicar
          </Button>
        </div>
      )}
    </div>
  );
}
