import { styled, useMediaQuery, useTheme } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import IMSLogoFull from '@icons/logo/IMSLogoFull';
import IMSLogoMedium from '@icons/logo/IMSLogoMedium';
import IMSLogoSmall from '@icons/logo/IMSLogoSmall';

interface LinkHomeProps extends Omit<LinkProps, 'href'> {
  children?: React.ReactNode;
};

const LinkHome: React.FC<LinkHomeProps> = (props) => {

  return (
    <Link
      {...props}
      href="/"
      scroll
    >
      <IMSLogoFull />
      <IMSLogoMedium />
      <IMSLogoSmall />
    </Link>
  )
}

export default styled(LinkHome)(({ theme }) => ({
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
  },
}));