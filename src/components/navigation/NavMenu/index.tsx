import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import { NavigationCardProps } from '@interfaces/CardProps';
import { Box, Card, styled } from '@mui/material';
import { navbar } from '@theme/constants';
import React from 'react';
import Display from './Display';
import Contact from './Contact';
import Copyright from './Copyright';
import Settings from './Settings';
import Legal from './Legal';
import Megamenu from './Megamenu';
import { NavHoverProvider } from '@helpers/NavHoverContext';

const NavigationWrapper = styled(Card)<NavigationCardProps>(({ theme, open }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: theme.Heights.header.expanded,
  padding: 0,
  paddingBottom: 0,
  maxWidth: '100%',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.Shadows.lower.zIndex,
  borderRadius: 0,
  overflow: 'hidden',
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shorter'
  }),
  transform: open ? 'translateY(0)' : 'translateY(-100%)',
}));

const NavigationContent = styled(Box)(({ theme }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: theme.Spaces.lg,
  paddingBottom: theme.Spaces.lg,
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(24, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
  alignItems: 'center',
  alignContent: 'center',
}));

const NavMenu = () => {
  return (
    <NavigationWrapper
      component='menu'
      open={useNavigationMenuState().isOpen}
      elevation={5}
    >
      <NavHoverProvider>
        <NavigationContent>
          <Display />
          <Megamenu />
          <Contact />
          <Copyright />
          <Settings />
          <Legal />
        </NavigationContent>
      </NavHoverProvider>
    </NavigationWrapper>
  )
};

export default NavMenu;