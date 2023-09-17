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
  marginBottom: theme.Spaces.xs,

  [theme.breakpoints.down('md')]: {
    gridColumn: '13 / 25',
    gridRow: '19 / 24',
  },

  '@media (max-width: 736px)': {
    gridColumn: '1 / 25',
    gridRow: '24 / 26',
  },

  '@media (max-width: 440px)': {
    gridColumn: '1 / 25',
    gridRow: '22 / 23',
    justifyContent: 'start',
  }
}));

const SettingsContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 820px)': {
    alignItems: 'flex-end',
  },

  '@media (max-width: 600px)': {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
  },

  '@media (max-width: 440px)': {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      marginTop: 0,
      boxShadow: 'none',
    },
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  boxShadow: theme.shadows[4],

  '@media (max-width: 660px)': {
    marginBottom: theme.Spaces.xs,
  },
  
  '@media (max-width: 600px)': {
    display: 'none',
  },
}));

const Settings = () => {

  return (
    <SettingsSection>
      <SettingsContent>
        <LanguageChanger />
        <StyledDivider orientation="vertical" />
        <ThemeChanger />
      </SettingsContent>
    </SettingsSection>
  )
};

export default Settings;