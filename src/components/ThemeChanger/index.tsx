import React, { useEffect, useState } from 'react';
import { Card, styled } from '@mui/material';
import MoonIcon from '@icons/utility/MoonIcon';
import { ThemeChangerWrapperProps } from '@interfaces/CardProps';
import SunIcon from '@icons/utility/SunIcon';
import SystemIcon from '@icons/utility/SystemIcon';
import { navbar } from '@theme/constants';
import { useTheme } from "next-themes";
import { useNavHoverContext } from '@helpers/NavHoverContext';
import { MediaThemeChangeSrc, MediaWhiteNoiseSrc } from '@utils/const';


const ThemeChangerWrapper = styled(Card)<ThemeChangerWrapperProps>(({ theme }) => ({
  padding: theme.Spaces.sm,
  borderRadius: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[3],

  '& svg': {
    cursor: 'pointer',
    margin: `0 ${theme.Spaces.xs}`,
    width: '1.5rem',
    height: '1.5rem',
  },

  '& svg:first-of-type': {
    marginLeft: theme.Spaces.xxs,
  },

  '& svg:last-of-type': {
    marginRight: theme.Spaces.xxs,
  },

  '@media (max-width: 820px)': {
    flexDirection: 'column',

    '& svg': {
      margin: `${theme.Spaces.xs} 0`,
    },

    '& svg:first-of-type': {
      marginTop: theme.Spaces.xxs,
      marginLeft: 0,
    },

    '& svg:last-of-type': {
      marginBottom: theme.Spaces.xxs,
      marginRight: 0,
    },
  },

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.Spaces.xs,
  },

  '@media (max-width: 440px)': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginRight: theme.Spaces.sm,
    height: '2.5rem',
    
    '& svg': {
      margin: `0 ${theme.Spaces.xs}`,
    },

    '& svg:first-of-type': {
      marginTop: 0,
      marginLeft: theme.Spaces.xxs,
    },

    '& svg:last-of-type': {
      marginBottom: 0,
      marginRight: theme.Spaces.xxs,
    },
  }
}));

const ThemeChanger = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { setCurrentUrl } = useNavHoverContext();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ThemeChangerWrapper
      elevation={navbar.elevationLow}
      name='change-theme'
      aria-label='change theme'
      role='radiogroup'
      onMouseEnter={() => setCurrentUrl(MediaThemeChangeSrc)}
      onMouseLeave={() => setCurrentUrl(MediaWhiteNoiseSrc)}
    >
      <MoonIcon
        active={(theme === 'dark')}
        onClick={() => handleThemeChange('dark')}
      />
      <SunIcon
        active={(theme === 'light')}
        onClick={() => handleThemeChange('light')}
      />
      <SystemIcon
        active={(theme === 'system')}
        onClick={() => handleThemeChange('system')}
      />
    </ThemeChangerWrapper>
  )
}

export default ThemeChanger