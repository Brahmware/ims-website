import { NavMap } from '@datatypes/NavMap';
import React from 'react';

interface NavMapContextValue {
  data?: NavMap[];
  fetchData: () => Promise<void>;
}

export const NavMapContext = React.createContext<NavMapContextValue>({
  fetchData: async () => {},
});

interface NavMapProviderProps {
  children: React.ReactNode;
}

export const NavMapProvider: React.FC<NavMapProviderProps> = ({ children }) => {
  const [data, setData] = React.useState<NavMap[]>();

  const fetchData = React.useCallback(async () => {
    const response = await fetch('/api/website/navigation-map');
    const data = await response.json();
    setData(data);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <NavMapContext.Provider value={{ data, fetchData }}>
      {children}
    </NavMapContext.Provider>
  );
};

export const useNavMapContext = () => React.useContext(NavMapContext);