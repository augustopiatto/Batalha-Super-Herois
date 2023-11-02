import React from "react";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";

export default function Filter() {
  const [opened, setOpened] = React.useState<boolean>(false);

  function openMenu() {
    setOpened(!opened);
  }
  function applyFilters() {
    return;
  }

  return (
    <div className="absolute top-5 right-0 flex">
      <Button
        className="items-start h-10 bg-slate-300 "
        sx={{ borderRadius: "4px 0px 0px 4px" }}
        onClick={() => {
          openMenu();
        }}
      >
        Filtros
      </Button>
      {opened && (
        <div className="bg-slate-300 w-[300px] h-[500px] p-5 flex flex-col">
          <SearchBar />
          <Button
            className="h-10 bg-slate-300 "
            onClick={() => {
              applyFilters();
            }}
          >
            Aplicar
          </Button>
        </div>
      )}
    </div>
  );
}
