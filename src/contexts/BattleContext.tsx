import CardInterface from "@/interfaces/CardInterface";
import React, { ReactNode } from "react";

type BattleContextType = {
  selectedHeroesIds: number[];
  setSelectedHeroesIds: (cardId: number[]) => void;
};

export const BattleContext = React.createContext<BattleContextType>(
  {} as BattleContextType
);

export const BattleStorage = ({ children }: { children: ReactNode[] }) => {
  const [selectedHeroesIds, setSelectedHeroesIds] = React.useState<number[]>(
    []
  );

  return (
    <BattleContext.Provider value={{ selectedHeroesIds, setSelectedHeroesIds }}>
      {children}
    </BattleContext.Provider>
  );
};
