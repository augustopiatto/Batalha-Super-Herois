import { Button } from "@mui/material";
import Deck from "./Deck";
import Filters from "./filters/Filters";
import React from "react";
import { BattleContext } from "@/contexts/BattleContext";
import Dialog from "@mui/material/Dialog";

export default function Content() {
  const { selectedHeroes, setSelectedHeroes } = React.useContext(BattleContext);
  const [open, setOpen] = React.useState<boolean>(false);

  function toggleBattleModal(value: boolean) {
    setOpen(value);
  }

  return (
    <div className="bg-slate-100 min-h-content relative">
      <Deck />
      <Filters />
      {selectedHeroes && selectedHeroes.length === 2 && (
        <Button onClick={() => toggleBattleModal(true)}>Batalhar!</Button>
      )}
      {open && (
        <Dialog onClose={() => toggleBattleModal(false)} open={open}>
          Oi
        </Dialog>
      )}
    </div>
  );
}
