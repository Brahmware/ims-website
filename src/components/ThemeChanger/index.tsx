import React, { useEffect, useState } from 'react';
import { Card, CardProps, FormControl, Typography, styled } from '@mui/material';
import MoonIcon from '@icons/utility/MoonIcon';
import SunIcon from '@icons/utility/SunIcon';
import SystemIcon from '@icons/utility/SystemIcon';
import { navbar } from '@theme/constants';
import { useTheme } from "next-themes";
import Divider from '@components/Dividers';
import { ThemeNameProps } from '@interfaces/TypographyProps';

interface ThemeChangerWrapperProps extends CardProps {
  component?: React.ElementType;
  elevation?: number;
  name?: string;
  role?: string;
};

const ThemeChangerWrapper = styled(Card)<ThemeChangerWrapperProps>(({ theme }) => ({
  padding: `${theme.Spaces.sm} ${theme.Spaces.md}`,
  borderRadius: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'unset',

  '& svg': {
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

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: '1rem',
  margin: `0 ${theme.Spaces.sm}`,
}));

const ThemeName = styled(Typography)<ThemeNameProps>(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
  minWidth: '3.25rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ThemeChanger = () => {

  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <ThemeChangerWrapper
      elevation={navbar.elevationLow}
      component={FormControl}
      name='change-theme'
      aria-label='change theme'
      role='radiogroup'
    >
      <SunIcon
        active={(theme === 'light')}
        onClick={() => handleThemeChange('light')}
      />
      <MoonIcon
        active={(theme === 'dark')}
        onClick={() => handleThemeChange('dark')}
      />
      <SystemIcon
        active={(theme === 'system')}
        onClick={() => handleThemeChange('system')}
      />
      <StyledDivider orientation='vertical' />
      <ThemeName variant='body2' component='span'>
        {theme}
      </ThemeName>
    </ThemeChangerWrapper>
  )
}

export default ThemeChanger