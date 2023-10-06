import {
  GlobalStyles as MuiGS,
  CssBaseline,
  useTheme,
  alpha
} from '@mui/material';
import React from 'react';

const GlobalStyles = () => {
  const { primary, text } = useTheme().palette;

  return (
    <React.Fragment>
      <CssBaseline />
      <MuiGS
        styles={{
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
            '& *::-moz-selection': { // For Firefox
              background: alpha(primary.main, 0.125),
            },
            '& *::selection': { // For other browsers
              background: alpha(primary.main, 0.125),
              color: primary.main,
            },
          },
          'h1, h2, h4, h5, h6': {
            color: text.secondary
          },
          
          '@media(max-width: 510px)': {
            'h1': {
              fontSize: '1.5em !important',
              lineHeight: '1.25em !important',
            },
          },
        }}
      />
    </React.Fragment>
  );
};

export default GlobalStyles;
