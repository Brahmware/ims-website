import Link from '@components/Link';
import TitleText from '@components/Texts/TitleText';
import BrahmwareWeblab from '@icons/logo/BrahmwareWeblab';
import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';

const StyledTitleText = styled(TitleText)(({ theme }) => ({
  fontSize: '1.125rem',
  whiteSpace: 'nowrap',
  lineHeight: '1.75',
}));

interface TechProviderProps extends BoxProps {
  children?: React.ReactNode;
};

const TechProvider: React.FC<TechProviderProps> = (props) => {
  return (
    <Box {...props}>
      <StyledTitleText>Technology Provider</StyledTitleText>
      <Link 
        href='https://brahmware.com'
        target='_blank'
      >
      <BrahmwareWeblab />
      </Link>
    </Box>
  )
};

export default styled(TechProvider)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '16 / 19',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}));