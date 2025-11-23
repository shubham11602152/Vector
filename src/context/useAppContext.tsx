import React from "react";
import type { AppContextType } from "@/context/AppContext.types";
import AppContext from "@/context/AppContext";

const useAppContext = (): AppContextType => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default useAppContext;
