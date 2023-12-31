import { PaletteOptions } from "@mui/material";
import { Colors, colors } from "@theme/Colors";



export interface CustomPaletteOptions extends PaletteOptions {
  colors: Colors;
};

export const customPaletteLight: CustomPaletteOptions = {
  mode: 'light',
  colors,
  primary: {
    main: colors.kesar,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.black,
    light: colors.slogan,
    contrastText: colors.white,
  },

  background: {
    default: colors.white,
    paper: colors.matmaila,
  },

  error: {
    main: colors.rakthalal,
    contrastText: colors.white,
  },
  warning: {
    main: colors.komola,
    contrastText: colors.white,
  },
  info: {
    main: colors.neelkantha,
    contrastText: colors.white,
  },
  success: {
    main: colors.kolapata,
    contrastText: colors.white,
  },
  text: {
    primary: colors.bhasma,
    secondary: colors.black,
  },
}

export const customPaletteDark: CustomPaletteOptions = {
  mode: 'dark',
  colors,
  primary: {
    main: colors.kesar,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.white,
    light: colors.slogan,
    contrastText: colors.black,
  },
  background: {
    default: colors.black,
    paper: colors.bhasma,
  },
  error: {
    main: colors.rakthalal,
    contrastText: colors.white,
  },
  warning: {
    main: colors.komola,
    contrastText: colors.white,
  },
  info: {
    main: colors.neelkantha,
    contrastText: colors.white,
  },
  success: {
    main: colors.kolapata,
    contrastText: colors.white,
  },
  text: {
    primary: colors.slogan,
    secondary: colors.matmaila,
  },
}
