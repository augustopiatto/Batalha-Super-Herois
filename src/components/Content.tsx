import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Deck from "./Deck";
import OpenFilters from "./filters/OpenFilters";
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
      <OpenFilters />
      <div className="w-full my-20 flex justify-center">
        <Button
          sx={{
            "&.Mui-disabled": {
              backgroundColor: "rgb(70, 72, 81)",
            },
          }}
          className="bg-black-light text-3xl text-grey rounded-2xl px-10 py-4 hover:bg-black-dark"
          disabled={selectedHeroesIds && selectedHeroesIds.length !== 2}
          onClick={() => toggleBattleModal(true)}
        >
          Batalhar!
        </Button>
      </div>
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "rgb(70, 72, 81)",
            color: "rgb(220, 220, 226)",
          },
          "& .Mui-selected": {
            border: "3px solid rgb(220, 220, 226)",
          },
        }}
        count={10}
        color="secondary"
        variant="outlined"
        shape="rounded"
        className="absolute bottom-10 left-1/2 translate-x-[-50%]"
      />
      {open && (
        <BattleDialog open={open} toggleBattleModal={toggleBattleModal} />
      )}
    </div>
  );
}
