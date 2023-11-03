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

  function comparePowerstats(
    powerstats1: PowerStats,
    powerstats2: PowerStats
  ): PowerstatsObject[] {
    const finalObject = Object.keys(powerstats1).map((powerstat) => {
      let obj = {
        [powerstat]: powerstats1[powerstat as keyof PowerStats],
        winner: false,
      };
      if (
        powerstats1[powerstat as keyof PowerStats] >
        powerstats2[powerstat as keyof PowerStats]
      ) {
        obj.winner = true;
      }
      return obj;
    });
    return finalObject;
  }

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

  const hero1Powerstats = comparePowerstats(hero1.powerstats, hero2.powerstats);
  const hero2Powerstats = comparePowerstats(hero2.powerstats, hero1.powerstats);

  const winner = getWinner(hero1, hero2);

  return (
    <Dialog
      onClose={() => toggleBattleModal(false)}
      open={open}
      fullWidth
      maxWidth="lg"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: "24px",
          },
        },
      }}
    >
      <div className="bg-black-light p-10">
        <h1 className="text-3xl text-success font-semibold text-center mb-8">
          Vencedor é {winner}
        </h1>
        <div className=" grid grid-cols-5">
          <div className="col-span-1 text-center">
            <Image
              src={hero1.images.lg}
              alt={hero1.name}
              height="0"
              width="0"
              sizes="100vw"
              priority
              className="w-[250px] h-auto rounded-md border-4 border-black-dark"
            />
            <h1 className="text-2xl text-grey mt-2">{hero1.name}</h1>
          </div>

          <div className="col-span-1 flex flex-col justify-center items-start gap-2 ml-10">
            {hero1Powerstats.map((powerstat) => (
              <div
                key={Object.keys(powerstat)[0]}
                className="flex items-center gap-4"
              >
                <p className="text-xl text-grey">
                  {powerstat[Object.keys(powerstat)[0]]}
                </p>
                <div
                  className={`h-1 w-3 ${
                    powerstat.winner ? "bg-success" : "bg-error"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <div className="col-span-1 flex flex-col justify-center gap-2">
            {Object.keys(hero1.powerstats).map((powerstat) => (
              <p
                key={powerstat}
                className="text-xl text-grey text-center capitalize"
              >
                {powerstat}
              </p>
            ))}
          </div>

          <div className="col-span-1 flex flex-col justify-center items-end gap-2 mr-10">
            {hero2Powerstats.map((powerstat) => (
              <div
                key={Object.keys(powerstat)[0]}
                className="flex items-center gap-4"
              >
                <div
                  className={`h-1 w-3 ${
                    powerstat.winner ? "bg-success" : "bg-error"
                  }`}
                ></div>
                <p className="text-xl text-grey">
                  {powerstat[Object.keys(powerstat)[0]]}
                </p>
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
              className="w-[250px] h-auto rounded-md border-4 border-black-dark"
            />
            <h1 className="text-2xl text-grey mt-2">{hero2.name}</h1>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
