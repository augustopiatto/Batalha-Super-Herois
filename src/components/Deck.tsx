import CardInterface from "@/interfaces/CardInterface";
import Card from "./Card";

export default function Deck(deck: CardInterface[]) {
  return (
    <div className="bg-slate-100 min-h-deck-content">
      {deck.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
}
