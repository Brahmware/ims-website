import React from 'react';
import { MainLayoutProps } from '@interfaces/LayoutProps';
import { NavigationMenuStateProvider } from '@helpers/NavigationMenuStateProvider';
import Navbar from '@components/navigation/NavBar';
import NavMenu from '@components/navigation/NavMenu';
import { styled } from '@mui/material';

const StyledMain = styled('main')<MainLayoutProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <NavigationMenuStateProvider>
      <Navbar />
      <NavMenu />
      <StyledMain {...props}>
        {children}
      </StyledMain>
    </NavigationMenuStateProvider>
  )
};

export default MainLayout;