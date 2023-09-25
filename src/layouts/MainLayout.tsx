import React from 'react';
import { MainLayoutProps } from '@interfaces/LayoutProps';
import { NavigationMenuStateProvider } from '@helpers/NavigationMenuStateProvider';
import Navbar from '@containers/Flamingo/NavBar';
import NavMenu from '@containers/Flamingo/NavMenu';
import { styled } from '@mui/material';
import Footer from '@containers/Footer';
import { NavMapProvider } from '@helpers/NavMapProvider';

const StyledMain = styled('main')<MainLayoutProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <NavMapProvider>
      <NavigationMenuStateProvider>
        <Navbar />
        <NavMenu />
        <StyledMain {...props}>
          {children}
        </StyledMain>
        <Footer />
      </NavigationMenuStateProvider>
    </NavMapProvider>
  )
};

export default MainLayout;