"use client";
import { createContext, useEffect, useState } from "react";
export const RecuerdoContext = createContext();

export const RecuerdoContextProvider = ({ children }) => {
  const [showRecuerdo, setShowRecuerdo] = useState(false);

  const handleShowRecuerdo = () => {
    setShowRecuerdo(true);
  };

  return (
    <RecuerdoContext.Provider
      value={{
        showRecuerdo,
        handleShowRecuerdo,
      }}
    >
      {children}
    </RecuerdoContext.Provider>
  );
};
