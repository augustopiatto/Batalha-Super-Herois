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
    <div className="max-w-[1440px] mt-20 mx-auto bg-black min-h-content relative">
      <Deck />
      <Filters />
      {selectedHeroesIds && selectedHeroesIds.length === 2 && (
        <div className="w-full my-20 flex justify-center">
          <Button
            onClick={() => toggleBattleModal(true)}
            sx={{
              "&:hover": {
                backgroundColor: "rgb(26, 27, 32)",
              },
            }}
            className="bg-good text-3xl text-grey rounded-2xl px-10 py-4"
          >
            Batalhar!
          </Button>
        </div>
      )}
      {open && (
        <BattleDialog open={open} toggleBattleModal={toggleBattleModal} />
      )}
    </div>
  );
}
