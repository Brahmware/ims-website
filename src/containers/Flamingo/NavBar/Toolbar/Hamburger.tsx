import React from 'react';
import HamburgerIcon from '@icons/utility/HamburgerIcon';
import { Box, IconButton, styled } from '@mui/material'
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';
import { HambugerIconProps } from '@interfaces/SVGProps';

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.Spaces.xs,
  height: theme.Sizes.icon.extraLarge.height,
}));

const StyledHamburgerIcon = styled(HamburgerIcon)(({ theme }) => ({
  height: theme.Heights.navbar.hamburger,
  width: theme.Widths.navbar.hamburger,
}));

const Hamburger = () => {

  const { isOpen, setIsOpen } = useNavigationMenuState();

  function handleOpen() {
    setIsOpen(!isOpen);
  };

  const [hover, setHover] = React.useState<HambugerIconProps['hovered']>(false);

  return (
    <HamburgerButton
      disableRipple
      disableFocusRipple
      disableTouchRipple
      onClick={handleOpen}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <StyledHamburgerIcon
        hovered={hover}
        open={isOpen}
      />
    </HamburgerButton>
  )
}

export default Hamburger;