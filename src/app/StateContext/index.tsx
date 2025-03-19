"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type StateContextType = {
  value: boolean;
  setValue: (newValue: boolean) => void;
  founderText: boolean;
  setFounderText: (newValue: boolean) => void;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(true);
  const [founderText, setFounderText] = useState(true);

  return (
    <StateContext.Provider
      value={{ value, setValue, founderText, setFounderText }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
