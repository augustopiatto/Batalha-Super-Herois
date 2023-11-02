import CardInterface from "@/interfaces/CardInterface";
import React, { ReactNode } from "react";

type BattleContextType = {
  selectedHeroes: number[];
  setSelectedHeroes: (cardId: number[]) => void;
};

export const BattleContext = React.createContext<BattleContextType>(
  {} as BattleContextType
);

export const BattleStorage = ({ children }: { children: ReactNode[] }) => {
  const [selectedHeroes, setSelectedHeroes] = React.useState<number[]>([]);

  return (
    <BattleContext.Provider value={{ selectedHeroes, setSelectedHeroes }}>
      {children}
    </BattleContext.Provider>
  );
};
