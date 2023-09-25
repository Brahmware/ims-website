import React, { FC } from 'react';
import { Card, styled } from '@mui/material';
import { navbar } from '@theme/constants';
import Toolbar from './Toolbar';
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import { BarProps } from '@interfaces/CardProps';
import ShowLive from './ShowLive';
import LinkHome from './LinkHome';
import useTouchSwipe from '@utils/hooks/useTouchSwipe';

const Bar = styled(Card)<BarProps>(({ theme, open }) => ({
  width: '100%',
  borderRadius: 0,
  position: 'sticky',
  padding: `0 ${theme.Spaces.md}`,
  top: '0',
  left: '0',
  right: '0',
  zIndex: navbar.zIndex,
  boxShadow: theme.shadows[navbar.elevationHigh],
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

  [theme.Breakpoints.down('tall')]: {
    height: theme.Heights.header.default,
  },
}));

const BarContent = styled('nav')(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: `
    auto 
    auto 
    minmax(3.015rem, 1fr) 
    auto 
    auto 
    auto 
    auto
  `,
  alignItems: 'center',
  alignContent: 'center',
  transition: theme.Transitions.createTransition({
    property: 'transform'
  }),

}));

const Navbar: FC = () => {

  const { isOpen, setIsOpen } = useNavigationMenuState();

  /* Handeling swipe down to open navigation menu */
  const navBarRef = React.useRef<HTMLDivElement>(null);
  useTouchSwipe({
    onSwipeDown: () => setIsOpen(true),
    threshold: 100
  }, navBarRef)

  return (
    <Bar
      component='header'
      ref={navBarRef}
      elevation={navbar.elevationHigh}
      open={isOpen}
    >
      <BarContent className='bar-content'>
        <LinkHome />
        <ShowLive />
        <Toolbar />
      </BarContent>
    </Bar>
  )
};

export default Navbar;