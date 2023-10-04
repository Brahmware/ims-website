import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Display from './Display';
import WebMap from './WebMap';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Privacy from './Privacy';
import Copyright from './Copyright';
import TechProvider from './TechProvider';

const BlankTop = styled(Box)(({ theme }) => ({
  height: theme.Heights.header.default,
  width: '50%',
  marginTop: theme.Spaces.xs,
  borderBottom: '3px solid ' + theme.palette.secondary.dark,
  marginBottom: '-3px',

  '@media screen and (max-width: 1360px)': {
    width: '43%',
  },
}));

const FooterBox = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.Heights.header.default})`,
  '@supports (height: 100dvh)': {
    minHeight: `calc(100dvh - ${theme.Heights.header.default})`,
  },
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  padding: theme.Spaces.md,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, minmax(2rem, 1fr))',
  gridTemplateRows: 'repeat(20, 1fr)',
}));

interface FooterProps extends BoxProps {
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Box {...props}>
      <BlankTop />
      <FooterBox>
        <Display />
        <WebMap />
        <Subscribe />
        <Contact />
        <TechProvider />
        <Copyright />
        <Privacy />
      </FooterBox>
    </Box>
  )
};

export default styled(Footer)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
}));