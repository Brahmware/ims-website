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
  boxShadow: 'unset',

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