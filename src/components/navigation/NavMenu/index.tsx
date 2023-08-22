import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import { NavigationCardProps } from '@interfaces/DisplayCardProps';
import { Box, Card, styled } from '@mui/material';
import { navbar } from '@theme/constants';
import React from 'react';
import Display from './Display';
import Contact from './Contact';
import Copyright from './Copyright';
import Settings from './Settings';
import Legal from './Legal';

const NavigationWrapper = styled(Card)<NavigationCardProps>(({ theme, open }) => ({
  ...theme.PageWrapperProps as any,
  paddingTop: theme.Heights.header.expanded,
  padding: 0,
  paddingBottom: 0,
  maxWidth: '100%',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
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
      open={useNavigationMenuState().isOpen}
      elevation={navbar.elevationHigh}
    >
      <NavigationContent>
        <Display />
        <Contact />
        <Copyright />
        <Settings />
        <Legal />
      </NavigationContent>
    </NavigationWrapper>
  )
};

export default NavMenu;