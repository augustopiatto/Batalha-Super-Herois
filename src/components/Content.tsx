import { Button } from "@mui/material";
import Deck from "./Deck";
import Filters from "./filters/Filters";
import React from "react";
import { BattleContext } from "@/contexts/BattleContext";
import BattleDialog from "./BattleDialog";

export default function Content() {
  const { selectedHeroesIds } = React.useContext(BattleContext);
  const [open, setOpen] = React.useState<boolean>(false);

  function toggleBattleModal(value: boolean) {
    setOpen(value);
  }

  return (
    <div className="bg-slate-100 min-h-content relative">
      <Deck />
      <Filters />
      {selectedHeroesIds && selectedHeroesIds.length === 2 && (
        <Button onClick={() => toggleBattleModal(true)}>Batalhar!</Button>
      )}
      {open && (
        <BattleDialog open={open} toggleBattleModal={toggleBattleModal} />
      )}
    </div>
  );
}
