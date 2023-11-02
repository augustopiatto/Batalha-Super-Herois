import React from "react";
import Dialog from "@mui/material/Dialog";
import { BattleContext } from "@/contexts/BattleContext";
import { HeroesContext } from "@/contexts/HeroesContext";
import Image from "next/image";
import { PowerStats } from "@/interfaces/CardInterface";

interface BattleDialog {
  open: boolean;
  toggleBattleModal: (value: boolean) => void;
}

export default function BattleDialog({
  open,
  toggleBattleModal,
}: BattleDialog) {
  const { selectedHeroesIds } = React.useContext(BattleContext);
  const { deck } = React.useContext(HeroesContext);

  const selectedHeroesInfos = deck.filter((hero) =>
    selectedHeroesIds.includes(hero.id)
  );

  const hero1 = selectedHeroesInfos[0];
  const hero2 = selectedHeroesInfos[1];

  let hero1Sum = 0;
  let hero2Sum = 0;

  let hero1Powerstats = Object.keys(hero1.powerstats).map((powerstat) => {
    hero1Sum += hero1.powerstats[powerstat as keyof PowerStats];
    return {
      [powerstat]: hero1.powerstats[powerstat as keyof PowerStats],
      winner: false,
    };
  });
  let hero2Powerstats = Object.keys(hero2.powerstats).map((powerstat) => {
    hero2Sum += hero2.powerstats[powerstat as keyof PowerStats];
    return {
      [powerstat]: hero2.powerstats[powerstat as keyof PowerStats],
      winner: false,
    };
  });

  const winner = hero1Sum > hero2Sum ? hero1.name : hero2.name;

  Object.keys(hero1.powerstats).forEach((powerstat) => {
    if (
      hero1.powerstats[powerstat as keyof PowerStats] >
      hero2.powerstats[powerstat as keyof PowerStats]
    ) {
      hero1Powerstats = hero1Powerstats.map((stat) => {
        return {
          [Object.keys(stat)[0]]: stat[Object.keys(stat)[0]],
          winner: true,
        };
      });
    } else {
      hero2Powerstats = hero2Powerstats.map((stat) => {
        return {
          [Object.keys(stat)[0]]: stat[Object.keys(stat)[0]],
          winner: true,
        };
      });
    }
  });

  return (
    <Dialog onClose={() => toggleBattleModal(false)} open={open}>
      <div className="bg-slate-500 p-10">
        <h1 className="text-center">Vencedor é {winner}</h1>
        <div className=" grid grid-cols-5">
          <div className="col-span-1 text-center">
            <Image
              src={hero1.images.lg}
              alt={hero1.name}
              height="0"
              width="0"
              sizes="100vw"
              priority
              className="w-[250px] h-auto"
            />
            <h1>{hero1.name}</h1>
          </div>
          <div className="col-span-1 ml-2">
            {hero1Powerstats.map((powerstat) => (
              <div
                key={Object.keys(powerstat)[0]}
                className="flex items-center"
              >
                <p>{powerstat[Object.keys(powerstat)[0]]} - </p>
                <div
                  className={`h-1 w-3 ml-2 ${
                    powerstat.winner ? "bg-success" : "bg-error"
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            {Object.keys(hero1.powerstats).map((powerstat) => (
              <p key={powerstat} className="capitalize text-center">
                {powerstat}
              </p>
            ))}
          </div>
          <div className="col-span-1 flex flex-col items-end mr-2">
            {hero2Powerstats.map((powerstat) => (
              <div
                key={Object.keys(powerstat)[0]}
                className="flex items-center"
              >
                <div
                  className={`h-1 w-3 mr-2 ${
                    powerstat.winner ? "bg-success" : "bg-error"
                  }`}
                ></div>
                <p>- {powerstat[Object.keys(powerstat)[0]]}</p>
              </div>
            ))}
          </div>
          <div className="col-span-1 text-center">
            <Image
              src={hero2.images.lg}
              alt={hero2.name}
              height="0"
              width="0"
              sizes="100vw"
              priority
              className="w-[250px] h-auto col-span-1"
            />
            <h1>{hero2.name}</h1>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
