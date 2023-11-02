import CardInterface from "@/interfaces/CardInterface";
import Card from "./Card";
import React from "react";
import { fakeDeck } from "@/helpers/apimock/fakeDeck";

export default function Deck() {
  const [deck, setDeck] = React.useState<CardInterface[]>([]);

  async function loadDeck() {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const json = await response.json();
    setDeck(json);
  }

  function loadFakeDeck() {
    setDeck(fakeDeck);
  }

  React.useEffect(() => {
    if (!deck.length) {
      // loadDeck();
      loadFakeDeck();
    }
  }, [deck]);

  return (
    <div className="py-5 px-10 flex gap-10">
      {deck &&
        deck.length &&
        deck.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}
