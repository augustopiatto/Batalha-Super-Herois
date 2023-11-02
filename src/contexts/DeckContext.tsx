import { fakeDeck } from "@/helpers/apimock/fakeDeck";
import CardInterface from "@/interfaces/CardInterface";
import React, { ReactNode } from "react";

type DeckContextType = {
  deck: CardInterface[];
  filteredDeck: CardInterface[];
  setFilteredDeck: (message: CardInterface[]) => void;
};

export const DeckContext = React.createContext<DeckContextType>(
  {} as DeckContextType
);

export const DeckStorage = ({ children }: { children: ReactNode[] }) => {
  const [deck, setDeck] = React.useState<CardInterface[]>([]);
  const [filteredDeck, setFilteredDeck] = React.useState<CardInterface[]>([]);

  async function loadDeck() {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const json = await response.json();
    setDeck(json);
    setFilteredDeck(json);
  }

  function loadFakeDeck() {
    setDeck(fakeDeck);
    setFilteredDeck(fakeDeck);
  }

  React.useEffect(() => {
    if (!deck.length) {
      // loadDeck();
      loadFakeDeck();
    }
  }, [deck]);

  return (
    <DeckContext.Provider value={{ deck, filteredDeck, setFilteredDeck }}>
      {children}
    </DeckContext.Provider>
  );
};
