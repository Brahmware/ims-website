import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import customTypography, { CustomTypographyOptions } from './Typography';
import  { CustomPaletteOptions, customPaletteLight, customPaletteDark } from './Palette';
import { Spaces, spaces } from './Spaces';
import { Heights, heights } from './Heights';
import { Durations, Transitions, durations, transitions } from './Transitions';
import { PageWrapperProps, pageWrapperProps } from './PagewrapperProps';
import { Breakpoints, breakpoints } from './Breakpoints';

declare module '@mui/material/styles' {

  interface Theme {
    Typography: CustomTypographyOptions;
    Palette: CustomPaletteOptions;
    Spaces: Spaces;
    Heights: Heights;
    Transitions: Transitions;
    PageWrapperProps: PageWrapperProps;
    Breakpoints: Breakpoints;
    TimeDurations: Durations;
  }


  interface ThemeOptions {
    Typography?: CustomTypographyOptions;
    Palette?: CustomPaletteOptions;
    Spaces?: Spaces;
    Heights?: Heights;
    Transitions?: Transitions;
    PageWrapperProps?: PageWrapperProps;
    Breakpoints?: Breakpoints;
    TimeDurations?: Durations;
  }
}

const commonThemeOptions: ThemeOptions = {
  typography: customTypography,
  Spaces: spaces,
  Heights: heights,
  Transitions: transitions,
  PageWrapperProps: pageWrapperProps,
  Breakpoints: breakpoints,
  TimeDurations: durations,
};

export const themeLight = createTheme({
  ...commonThemeOptions,
  palette: customPaletteLight,
});

export const themeDark = createTheme({
  ...commonThemeOptions,
  palette: customPaletteDark,
});