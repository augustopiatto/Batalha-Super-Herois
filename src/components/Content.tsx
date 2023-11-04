import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Deck from "./Deck/Deck";
import OpenFilters from "./filters/OpenFilters";
import React from "react";
import { BattleContext } from "@/contexts/BattleContext";
import BattleDialog from "./BattleDialog";
import { HeroesContext } from "@/contexts/HeroesContext";
import Warning from "./Warning";

export default function Content() {
  const { selectedHeroesIds } = React.useContext(BattleContext);
  const { allPages, selectPage } = React.useContext(HeroesContext);

  const [open, setOpen] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    selectPage(value);
  }

  function toggleBattleModal(value: boolean) {
    setOpen(value);
  }

  return (
    <div className="max-w-[1440px] mx-auto bg-black min-h-content relative flex flex-col">
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
      <Warning />
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
        count={allPages}
        page={page}
        size="large"
        variant="outlined"
        shape="rounded"
        className="mt-auto pb-10 flex justify-center"
        onChange={handleChange}
      />
      {open && (
        <BattleDialog open={open} toggleBattleModal={toggleBattleModal} />
      )}
    </div>
  );
}
