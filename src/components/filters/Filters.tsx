import React from "react";
import SearchName from "./SearchName";
import { Button } from "@mui/material";
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
        sx={{
          borderRadius: "8px 0px 0px 8px",
          "&:hover": {
            backgroundColor: "rgb(220, 220, 226)",
          },
        }}
        className="bg-grey text-xl text-black-dark items-start h-10 px-3"
        onClick={() => {
          openMenu();
        }}
      >
        Filtros
      </Button>
      {opened && (
        <div className="bg-grey w-[300px] h-full rounded-b-lg p-5 flex flex-col justify-between">
          <SearchName deck={deck} setName={setName} />
          <div className="w-full mt-4 flex justify-center">
            <Button
              className="bg-black-light rounded-lg text-grey py-2 px-4 hover:bg-black-dark"
              onClick={() => {
                applyFilters();
              }}
            >
              Aplicar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
