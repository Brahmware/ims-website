import React, { createContext, useContext } from "react";

export type MegamenuStateContextType = {
  activeMenu: HTMLUListElement;
  setActiveMenu: React.Dispatch<React.SetStateAction<HTMLUListElement>>;
};

const MegamenuStateContext = createContext<MegamenuStateContextType>(
  null as unknown as MegamenuStateContextType
);

export const useMegamenuStateContext = () => useContext(MegamenuStateContext);

export const MegamenuStateProvider = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {

  const [activeMenu, setActiveMenu] = React.useState(null as unknown as HTMLUListElement);

  return (
    <MegamenuStateContext.Provider
      value={{ activeMenu, setActiveMenu }}
    >
      {children}
    </MegamenuStateContext.Provider>
  )
};
