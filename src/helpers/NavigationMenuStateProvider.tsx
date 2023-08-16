import React, { createContext, useContext } from "react";

export type NavigationMenuStateContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const NavigationMenuStateContext = createContext<NavigationMenuStateContextType>(
  null as unknown as NavigationMenuStateContextType
);

export const useNavigationMenuState = () => {
  const context = useContext(NavigationMenuStateContext);
  if (!context) {
    throw new Error(
      "useNavigationMenuState must be used within a NavigationMenuStateContext"
    );
  }
  return context;
};

export const NavigationMenuStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavigationMenuStateContext.Provider value={value}>
      {children}
    </NavigationMenuStateContext.Provider>
  );
}