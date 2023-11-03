import { fakeDeck } from "@/helpers/apimock/fakeDeck";
import CardInterface from "@/interfaces/CardInterface";
import React, { ReactNode } from "react";

type HeroesContextType = {
  allPages: number;
  deck: CardInterface[];
  filteredDeck: CardInterface[];
  setFilteredDeck: (cards: CardInterface[]) => void;
  selectPage: (page: number) => void;
};

export const HeroesContext = React.createContext<HeroesContextType>(
  {} as HeroesContextType
);

export const HeroesStorage = ({ children }: { children: ReactNode }) => {
  const [deck, setDeck] = React.useState<CardInterface[]>([]);
  const [filteredDeck, setFilteredDeck] = React.useState<CardInterface[]>([]);
  const [allPages, setAllPages] = React.useState<number>(1);

  const cardsPerPage = 10;

  async function loadDeck() {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const json = await response.json();
    setAllPages(Math.floor(json.length / cardsPerPage));
    const firstTen: CardInterface[] = json.slice(0, cardsPerPage);
    setDeck(json);
    setFilteredDeck(firstTen);
  }

  function loadFakeDeck() {
    setDeck(fakeDeck);
    setFilteredDeck(fakeDeck);
  }

  function selectPage(page: number) {
    const newPage = deck.slice(cardsPerPage * page, cardsPerPage * page + 10);
    setFilteredDeck(newPage);
  }

  React.useEffect(() => {
    if (!deck.length) {
      loadDeck();
      //: use o fakeDeck se não quiser ficar chamando a API
      // loadFakeDeck();
    }
  }, [deck]);

  return (
    <HeroesContext.Provider
      value={{ allPages, deck, filteredDeck, setFilteredDeck, selectPage }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
