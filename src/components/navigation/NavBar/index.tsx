import React, { FC } from 'react';
import { Card, CardProps, styled } from '@mui/material';
import { navbar } from '@theme/constants';
import Toolbar from './Toolbar';
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import LinkHome from './LinkHome';

interface BarProps extends CardProps {
  component?: React.ElementType;
  open?: boolean;
}

const Bar = styled(Card)<BarProps>(({ theme, open }) => ({
  width: '100%',
  borderRadius: 0,
  position: 'sticky',
  padding: `0 ${theme.Spaces.sm}`,
  top: '0',
  left: '0',
  right: '0',
  zIndex: navbar.zIndex,
  boxShadow: (
    open ?
      theme.shadows[0] :
      theme.shadows[navbar.elevationHigh]
  ),
  backgroundColor: theme.palette.background.default,
  transition: theme.Transitions.createTransition([
    {
      property: 'height',
      duration: 'shorter'
    },
    {
      property: 'box-shadow',
      duration: 'shortest'
    }
  ]),
  height: open ? theme.Heights.header.expanded : theme.Heights.header.default,
}));

const BarContent = styled('nav')(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto auto auto',
  alignItems: 'center',
  alignContent: 'center',
  transition: theme.Transitions.createTransition({
    property: 'transform'
  }),

}));

const Navbar: FC = () => {
  return (
    <Bar
      component='header'
      elevation={navbar.elevationHigh}
      open={useNavigationMenuState().isOpen}
    >
      <BarContent className='bar-content'>
        <LinkHome />
        <Toolbar />
      </BarContent>
    </Bar>
  )
};

export default Navbar;