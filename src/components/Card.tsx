import { BattleContext } from "@/contexts/BattleContext";
import CardInterface from "@/interfaces/CardInterface";
import Image from "next/image";
import React from "react";

interface Card {
  card: CardInterface;
}

export default function Card({ card }: Card) {
  const { selectedHeroes, setSelectedHeroes } = React.useContext(BattleContext);

  async function selectHeroes(hero: CardInterface) {
    const wasCardSelected = !!selectedHeroes.includes(hero.id);
    if (selectedHeroes.length < 2 && !wasCardSelected) {
      const heroesToBattle = [...selectedHeroes, hero.id];
      await setSelectedHeroes(heroesToBattle);
    } else if (wasCardSelected) {
      const remainingHeroes = selectedHeroes.filter(
        (selHero) => selHero !== hero.id
      );
      await setSelectedHeroes(remainingHeroes);
    }
  }

  const cardBorderColor = `border-${card.biography.alignment}-border`;
  const cardColor = `bg-${card.biography.alignment}`;

  const teste = selectedHeroes.includes(card.id)
    ? "bg-slate-400"
    : "bg-slate-100";

  return (
    <div
      className={`rounded-lg border ${cardBorderColor} shadow-md hover:scale-105 hover:shadow-card-highlight`}
    >
      <Image
        src={card.images.lg}
        alt={card.slug}
        height="0"
        width="0"
        sizes="100vw"
        priority
        className="w-[250px] h-auto rounded-t-lg cursor-pointer"
        onClick={() => selectHeroes(card)}
      />
      <div
        className={`${cardColor} ${teste} border-t-2 ${cardBorderColor} px-2 py-2`}
      >
        <h1 className="text-3xl text-center capitalize font-semibold">
          {card.name}
        </h1>
        <p className="text-xl text-center capitalize py-4">
          {card.appearance.race} - {card.biography.alignment}
        </p>
      </div>
    </div>
  );
}
