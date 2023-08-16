import React from 'react';
import Icon from '@icons/utility/HamburgerIcon';
import { Box, IconButton, styled } from '@mui/material'
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import { HambugerIconProps } from '@interfaces/SVGProps';

const HamburgerWrapper = styled(Box)(({ theme }) => ({
  margin: '0',

  '& path': {
    transition: 'all 0.1s ease-in-out',
    strokeLinecap: 'round',
    strokeWidth: '0.33rem',
  }
}));

const HamburgerIcon = styled(Icon)<HambugerIconProps>(({ theme, open, hovered }) => {
  if (!open) return ({
    width: '1.5rem',
    height: '1.5rem',

    '& path': {
      stroke: theme.palette.secondary.main,
    },

    '& .hamburger_svg__middle-bar': {
      transform: hovered ? 'scaleX(100%)' : 'translateX(40%) scaleX(60%)',
    }
  });

  return ({
    width: '1.5rem',
    height: '1.5rem',
    transform: 'scale(1.125)',

    '& path': {
      stroke: theme.palette.error.main,
    },

    '& .hamburger_svg__top-bar': {
      transform: 'rotate(45deg)',
      transformOrigin: '12% 36%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .hamburger_svg__bottom-bar': {
      transform: 'rotate(-45deg)',
      transformOrigin: '13% 64%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .hamburger_svg__middle-bar': {
      transform: 'translateX(-100%)',
    }
  })
});

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  margin: '0',
  padding: '0',
  height: '2rem',
  width: '2rem',

  '&:hover': {
    backgroundColor: 'transparent',
  }
}));

const Hamburger = () => {

  const { isOpen, setIsOpen } = useNavigationMenuState();

  function handleOpen() {
    setIsOpen(!isOpen);

    console.log(isOpen);
  };

  const [hover, setHover] = React.useState<HambugerIconProps['hovered']>(false);

  return (
    <HamburgerWrapper>
      <HamburgerButton
        disableRipple
        disableFocusRipple
        disableTouchRipple
        onClick={handleOpen}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <HamburgerIcon
          hovered={hover}
          open={isOpen}
        />
      </HamburgerButton>
    </HamburgerWrapper>
  )
}

export default Hamburger;