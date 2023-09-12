import { TypographyOptions } from "@mui/material/styles/createTypography";


const baseFontFamily = [
  'gotham',
  'sans-serif',
].join(',');

export interface CustomTypographyOptions extends TypographyOptions {
  fontFamily: string;
};

const customTypography: CustomTypographyOptions = {
  fontFamily: baseFontFamily,

  h1: {
    fontFamily: baseFontFamily,
    fontWeight: 900,
    fontSize: '3rem',
    lineHeight: '3.5rem',
  },

  h2: {
    fontFamily: baseFontFamily,
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: '3rem',
  },

  h3: {
    fontFamily: baseFontFamily,
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },

  h4: {
    fontFamily: baseFontFamily,
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  h5: {
    fontFamily: baseFontFamily,
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },

  h6: {
    fontFamily: baseFontFamily,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },

  subtitle1: {
    fontFamily: baseFontFamily,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },

  subtitle2: {
    fontFamily: baseFontFamily,
    fontWeight: 300,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  body1: {
    fontFamily: baseFontFamily,
    fontWeight: 300,
    fontSize: '0.9rem',
    lineHeight: '1.33rem',
  },

  body2: {
    fontFamily: baseFontFamily,
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: 4.5,
    lineHeight: '1.5rem',
  },

  button: {
    fontFamily: baseFontFamily,
    fontWeight: 500,
    letterSpacing: '0.05rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  caption: {
    fontFamily: baseFontFamily,
    fontWeight: 100,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },

  overline: {
    fontFamily: baseFontFamily,
    fontWeight: 100,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
};

export default customTypography;
