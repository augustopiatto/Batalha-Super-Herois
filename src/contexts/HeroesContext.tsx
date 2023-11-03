import { fakeDeck } from "@/helpers/apimock/fakeDeck";
import CardInterface from "@/interfaces/CardInterface";
import React, { ReactNode } from "react";

type HeroesContextType = {
  deck: CardInterface[];
  filteredDeck: CardInterface[];
  setFilteredDeck: (message: CardInterface[]) => void;
};

export const HeroesContext = React.createContext<HeroesContextType>(
  {} as HeroesContextType
);

export const HeroesStorage = ({ children }: { children: ReactNode }) => {
  const [deck, setDeck] = React.useState<CardInterface[]>([]);
  const [filteredDeck, setFilteredDeck] = React.useState<CardInterface[]>([]);

  async function loadDeck() {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const json = await response.json();
    const firstTen: CardInterface[] = json.splice(0, 10);
    setDeck(firstTen);
    setFilteredDeck(firstTen);
  }

  function loadFakeDeck() {
    setDeck(fakeDeck);
    setFilteredDeck(fakeDeck);
  }

  React.useEffect(() => {
    if (!deck.length) {
      loadDeck();
      // loadFakeDeck();
    }
  }, [deck]);

  return (
    <HeroesContext.Provider value={{ deck, filteredDeck, setFilteredDeck }}>
      {children}
    </HeroesContext.Provider>
  );
};
