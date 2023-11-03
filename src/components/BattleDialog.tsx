import React from "react";
import Dialog from "@mui/material/Dialog";
import { BattleContext } from "@/contexts/BattleContext";
import { HeroesContext } from "@/contexts/HeroesContext";
import Image from "next/image";
import CardInterface, { PowerStats } from "@/interfaces/CardInterface";

interface BattleDialog {
  open: boolean;
  toggleBattleModal: (value: boolean) => void;
}

interface PowerstatsObject {
  [key: string]: number | boolean;
  winner: boolean;
}

export default function BattleDialog({
  open,
  toggleBattleModal,
}: BattleDialog) {
  const { selectedHeroesIds } = React.useContext(BattleContext);
  const { deck } = React.useContext(HeroesContext);

  function createPowerstatsObject(powerstats: PowerStats): PowerstatsObject[] {
    return Object.keys(powerstats).map((powerstat) => {
      return {
        [powerstat]: powerstats[powerstat as keyof PowerStats],
        winner: false,
      };
    });
  }

  //: Corrigir esse método

  // function comparePowerstats(
  //   powerstats1: PowerStats,
  //   powerstats2: PowerStats,
  //   hero1Powerstats: PowerstatsObject[],
  //   hero2Powerstats: PowerstatsObject[]
  // ): void {
  //   Object.keys(powerstats1).forEach((powerstat) => {
  //     if (
  //       powerstats1[powerstat as keyof PowerStats] >
  //       powerstats2[powerstat as keyof PowerStats]
  //     ) {
  //       hero1Powerstats = hero1Powerstats.map((stat) => {
  //         return {
  //           [Object.keys(stat)[0]]: stat[Object.keys(stat)[0]],
  //           winner: true,
  //         };
  //       });
  //       console.log("hero1Powerstats", hero1Powerstats);
  //     } else {
  //       hero2Powerstats = hero2Powerstats.map((stat) => {
  //         return {
  //           [Object.keys(stat)[0]]: stat[Object.keys(stat)[0]],
  //           winner: true,
  //         };
  //       });
  //       console.log("hero2Powerstats", hero2Powerstats);
  //     }
  //   });
  // }

  function getWinner(hero1: CardInterface, hero2: CardInterface): string {
    const sumHero1 = Object.keys(hero1.powerstats).reduce(
      (acc, cur) => (acc += hero1.powerstats[cur as keyof PowerStats]),
      0
    );
    const sumHero2 = Object.keys(hero2.powerstats).reduce(
      (acc, cur) => (acc += hero2.powerstats[cur as keyof PowerStats]),
      0
    );
    const winner = sumHero1 > sumHero2 ? hero1.name : hero2.name;
    return winner;
  }

  const selectedHeroesInfos = deck.filter((hero) =>
    selectedHeroesIds.includes(hero.id)
  );
  const hero1 = selectedHeroesInfos[0];
  const hero2 = selectedHeroesInfos[1];

  const hero1Powerstats = createPowerstatsObject(hero1.powerstats);
  const hero2Powerstats = createPowerstatsObject(hero2.powerstats);

  // comparePowerstats(
  //   hero1.powerstats,
  //   hero2.powerstats,
  //   hero1Powerstats,
  //   hero2Powerstats
  // );

  const winner = getWinner(hero1, hero2);

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
