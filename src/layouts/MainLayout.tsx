import React from 'react';
import { MainLayoutProps } from '@interfaces/LayoutProps';
import { NavigationMenuStateProvider } from '@helpers/NavigationMenuStateProvider';
import Navbar from '@containers/Flamingo/NavBar';
import NavMenu from '@containers/Flamingo/NavMenu';
import { styled } from '@mui/material';
import Footer from '@containers/Footer';
import { NavMapProvider } from '@helpers/NavMapProvider';


const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <NavMapProvider>
      <NavigationMenuStateProvider>
        <Navbar />
        <NavMenu />
        <main {...props}>
          {children}
        </main>
        <Footer />
      </NavigationMenuStateProvider>
    </NavMapProvider>
  )
};

export default styled(MainLayout)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));