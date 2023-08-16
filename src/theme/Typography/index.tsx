import { TypographyOptions } from "@mui/material/styles/createTypography";

export interface CustomTypographyOptions extends TypographyOptions {
  fontFamily: string;

  fontWeightUltra: number;
  fontWeightBlack: number;
  fontWeightBold: number;
  fontWeightSemiBold: number;
  fontWeightRegular: number;
  fontWeightLight: number;
  fontWeightThin: number;
}

const customTypography: CustomTypographyOptions = {
  
  fontFamily: ['gotham', 'sans-serif', ].join(','),

  // font weights
  fontWeightUltra: 1000,
  fontWeightBlack: 900,
  fontWeightBold: 700,
  fontWeightSemiBold: 500,
  fontWeightRegular: 400,
  fontWeightLight: 300,
  fontWeightThin: 100,

  // h1 - h6
  h1: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '3rem',
    lineHeight: '3.5rem',
  },

  h2: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: '3rem',
  },

  h3: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },

  h4: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,

    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  h5: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },

  h6: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },

  // subtitle1 - subtitle2
  subtitle1: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
  
  subtitle2: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  // body1 - body2
  body1: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },

  body2: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  // button - caption - overline
  button: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  caption: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
  
  overline: {
    fontFamily: [
      'gotham',
      'sans-serif',
    ].join(','),
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
};

export default customTypography;
