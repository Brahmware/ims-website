import { styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import IMSLogoFull from '@icons/logo/IMSLogoFull';

const Logo = styled(Link)(({ theme }) => ({
  width: theme.Widths.navbar.linkHome,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LinkHome = () => {
  return (
    <Logo
      href="/"
      scroll
    >
      <IMSLogoFull />
    </Logo>
  )
}

export default LinkHome