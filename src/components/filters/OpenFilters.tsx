import React from "react";
import { Button } from "@mui/material";
import Filters from "./Filters/Filters";

export default function OpenFilters() {
  const [opened, setOpened] = React.useState<boolean>(false);

  function openMenu() {
    setOpened(!opened);
  }

  return (
    <div className="absolute top-5 right-0 flex">
      <Button
        sx={{
          borderRadius: "8px 0px 0px 8px",
          "&:hover": {
            backgroundColor: "rgb(220, 220, 226)",
          },
        }}
        className="bg-grey text-xl text-black-dark items-start h-10 px-3"
        onClick={() => {
          openMenu();
        }}
      >
        Filtros
      </Button>
      <Filters opened={opened} />
    </div>
  );
}
