import CardInterface from "@/interfaces/CardInterface";

export default function Card(card: CardInterface) {
  return <div className="bg-slate-200 h-[100px] w-[50px]">{card.id}</div>;
}
