import { styled, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import IMSLogoFull from '@icons/logo/IMSLogoFull';
import IMSLogoMedium from '@icons/logo/IMSLogoMedium';
import IMSLogoSmall from '@icons/logo/IMSLogoSmall';

const Logo = styled(Link)(({ theme }) => ({
  width: theme.Widths.navbar.linkHome,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.Spaces.xxs,

  [theme.Breakpoints.down('md')]: {
    width: theme.Widths.navbar.linkHomeMedium,
  },

  '@media (max-width: 765px)': {
    width: theme.Widths.navbar.linkHomeSmall,
  }
}));

const LinkHome = () => {

  return (
    <Logo
      href="/"
      scroll
    >
      <IMSLogoFull />
      <IMSLogoMedium />
      <IMSLogoSmall />
    </Logo>
  )
}

export default LinkHome