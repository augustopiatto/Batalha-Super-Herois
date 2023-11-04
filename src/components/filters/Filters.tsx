import React from "react";
import SearchName from "./SearchName";
import { HeroesContext } from "@/contexts/HeroesContext";
import { Button } from "@mui/material";

interface Filters {
  opened: boolean;
}

export default function Filters({ opened }: Filters) {
  const { deck, setFilteredDeck } = React.useContext(HeroesContext);
  const [name, setName] = React.useState<string | null>(null);

  const hidden = opened ? "" : "hidden";

  function applyFilters() {
    if (name) {
      const filteredHero = deck.filter((hero) => hero.name === name);
      setFilteredDeck(filteredHero);
    } else {
      setFilteredDeck(deck);
    }
  }

  return (
    <div
      className={`${hidden} bg-grey w-[300px] h-full rounded-b-lg p-5 flex flex-col justify-between sm-m:absolute sm-m:top-10 sm-m:right-0 sm-m:h-[200px] sm-m:rounded-s-lg`}
    >
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
  );
}
