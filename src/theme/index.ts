import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import customTypography, { CustomTypographyOptions } from './Typography';
import  { CustomPaletteOptions, customPaletteLight, customPaletteDark } from './Palette';
import { Spaces, spaces } from './Spaces';
import { Heights, heights } from './Heights';
import { Durations, Transitions, durations, transitions } from './Transitions';
import { PageWrapperProps, pageWrapperProps } from './PagewrapperProps';
import { Breakpoints, breakpoints } from './Breakpoints';
import { Widths, widths } from './Widths';
import { Strokes, strokes } from './Strokes';
import sizes, { Sizes } from './Sizes';
import shadows, { Shadows } from './Shadows';
import colors, { Colors } from './Colors';
import { FontWeights, fontWeights } from './FontWeight';

declare module '@mui/material/styles' {

  interface Theme {
    Typography: CustomTypographyOptions;
    Palette: CustomPaletteOptions;
    Spaces: Spaces;
    Heights: Heights;
    Widths: Widths;
    Sizes: Sizes;
    Shadows: Shadows;
    Strokes: Strokes;
    Transitions: Transitions;
    FontWeights: FontWeights;
    PageWrapperProps: PageWrapperProps;
    Breakpoints: Breakpoints;
    TimeDurations: Durations;
    Colors: Colors;
  }

  interface ThemeOptions {
    Typography?: CustomTypographyOptions;
    Palette?: CustomPaletteOptions;
    Spaces?: Spaces;
    Heights?: Heights;
    Widths?: Widths;
    Sizes?: Sizes;
    Shadows?: Shadows;
    Strokes?: Strokes;
    Transitions?: Transitions;
    FontWeights?: FontWeights;
    PageWrapperProps?: PageWrapperProps;
    Breakpoints?: Breakpoints;
    TimeDurations?: Durations;
    Colors?: Colors;
  }
}

const commonThemeOptions: ThemeOptions = {
  typography: customTypography,
  Spaces: spaces,
  Heights: heights,
  Widths: widths,
  Sizes: sizes,
  Shadows: shadows,
  Strokes: strokes,
  Transitions: transitions,
  PageWrapperProps: pageWrapperProps,
  Breakpoints: breakpoints,
  TimeDurations: durations,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body, #root {
          height: 100%;
        };
        a, a:hover, a:visited, a:active {
          text-decoration: none;
        };
        ul, li {
          list-style: none;
          margin: 0;
          padding: 0;
        };
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
        },
      },
    },
  },
  Colors: colors,
  FontWeights: fontWeights,
};

export const themeLight = createTheme({
  ...commonThemeOptions,
  palette: customPaletteLight,
});

export const themeDark = createTheme({
  ...commonThemeOptions,
  palette: customPaletteDark,
});

export default themeLight;