import Card from "./Card";
import React from "react";
import { DeckContext } from "@/contexts/DeckContext";

export default function Deck() {
  const { filteredDeck } = React.useContext(DeckContext);

  return (
    <div className="py-5 px-10 flex gap-10">
      {filteredDeck &&
        filteredDeck.length &&
        filteredDeck.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}
