import CardInterface from "@/interfaces/CardInterface";
import Image from "next/image";
import React from "react";

export default function Card({ card }: CardInterface) {
  const cardBorderColor = `border-${card.biography.alignment}-border`;
  const cardColor = `bg-${card.biography.alignment}`;

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
        className="w-[250px] h-auto rounded-t-lg cursor-pointer"
      />
      <div className={`${cardColor} border-t-2 ${cardBorderColor} px-2 py-2`}>
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
