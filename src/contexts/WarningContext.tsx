import React, { ReactNode } from "react";

type WarningContextType = {
  message: string;
  setMessage: (message: string) => void;
};

export const WarningContext = React.createContext<WarningContextType>(
  {} as WarningContextType
);

export const WarningStorage = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = React.useState<string>("");

  return (
    <WarningContext.Provider value={{ message, setMessage }}>
      {children}
    </WarningContext.Provider>
  );
};
