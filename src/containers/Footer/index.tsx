import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Display from './Display';
import WebMap from './WebMap';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Privacy from './Privacy';
import Copyright from './Copyright';

const BlankTop = styled(Box)(({ theme }) => ({
  height: theme.Heights.header.default,
  width: '50%',
  marginTop: theme.Spaces.xs,
  borderBottom: '3px solid ' + theme.palette.secondary.dark,
}));

const FooterBox = styled(Box)(({ theme }) => ({
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
        <Copyright />
        <Privacy />
      </FooterBox>
    </Box>
  )
};

export default styled(Footer)(({ theme }) => ({
  height: '100dvh',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
}));