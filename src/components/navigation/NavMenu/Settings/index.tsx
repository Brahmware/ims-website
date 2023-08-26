import React from 'react';
import { Box, styled } from '@mui/material';
import Divider from '@components/Dividers';
import LanguageChanger from '@components/LanguageChanger';
import ThemeChanger from '@components/ThemeChanger';

const SettingsSection = styled('section')(({ theme }) => ({
  gridColumn: '18 / 25',
  gridRow: '19 / 24',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  zIndex: theme.Shadows.medium.zIndex,

  [theme.breakpoints.down('md')]: {
    gridColumn: '13 / 25',
    gridRow: '19 / 24',
  },
}));

const SettingsContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Settings = () => {
  return (
    <SettingsSection>
      <SettingsContent>
        <LanguageChanger />
        <Divider orientation="vertical" />
        <ThemeChanger />
      </SettingsContent>
    </SettingsSection>
  )
};

export default Settings;