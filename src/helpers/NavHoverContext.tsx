import React, { createContext, useContext } from "react";

export type NavHoverContextType = {
  currentUrl: string;
  setCurrentUrl: React.Dispatch<React.SetStateAction<string>>;
  resetCurrentUrl: () => void;
};

const NavHoverContext = createContext<NavHoverContextType>(
  null as unknown as NavHoverContextType
);

export const useNavHoverContext = () => useContext(NavHoverContext);

export const NavHoverProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  const [currentUrl, setCurrentUrl] = React.useState('');
  const resetCurrentUrl = () => setCurrentUrl('');

  return (
    <NavHoverContext.Provider
      value={{ currentUrl, setCurrentUrl, resetCurrentUrl }}
    >
      {children}
    </NavHoverContext.Provider>
  )
};