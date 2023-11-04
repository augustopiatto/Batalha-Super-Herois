import React from "react";
import { WarningContext } from "@/contexts/WarningContext";
import Icon from "@mui/material/Icon";

export default function Warning() {
  const { message } = React.useContext(WarningContext);

  if (message)
    return (
      <div className="flex justify-center">
        <div className="bg-warning py-5 px-10 flex items-center gap-3">
          <Icon>warning</Icon>
          <p className="text-lg font-semibold">{message}</p>
        </div>
      </div>
    );
  else return;
}
