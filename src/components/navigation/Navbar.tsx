import React, { FC } from 'react';
import IMSLogoFull from '@icons/logo/IMSLogoFull';
import { Card, CardProps, styled } from '@mui/material';
import { navbar } from '@theme/constants';
import Toolbar from './Toolbar';
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';

interface BarProps extends CardProps {
  component?: React.ElementType;
  menuopen?: "true" | "false" | boolean;
}

const Bar = styled(Card)<BarProps>(({ theme, menuopen }) => ({
  width: '100%',
  borderRadius: 0,
  position: 'sticky',
  padding: `0 ${theme.Spaces.sm}`,
  top: '0',
  left: '0',
  right: '0',
  zIndex: '500',
  backgroundColor: theme.palette.background.default,
  transition: theme.Transitions.createTransition([{
    property: 'height',
    duration: 'shorter'
  }]),
  height: (menuopen === 'true') ? theme.Heights.header.expanded : theme.Heights.header.default,
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

const Logo = styled('a')(({ theme }) => ({
  height: '100%',
  width: 'max-content',
}));

const LogoIcon = styled(IMSLogoFull)(({ theme }) => ({
  height: '100%',
  width: '15em',
  padding: `${theme.Spaces.xs} ${theme.Spaces.sm}`,
}));

const Navbar: FC = () => {
  return (
    <Bar
      component='header'
      elevation={navbar.elevationHigh}
      menuopen={useNavigationMenuState().isOpen ? 'true' : 'false'}
    >
      <BarContent className='bar-content'>
        <Logo href="/">
          <LogoIcon />
        </Logo>
        <Toolbar />
      </BarContent>
    </Bar>
  )
}

export default Navbar