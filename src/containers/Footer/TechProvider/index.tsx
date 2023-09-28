import React from 'react';
import Link from '@components/Link';
import TitleText from '@components/Texts/TitleText';
import BrahmwareWeblab from '@icons/logo/BrahmwareWeblab';
import { Box, BoxProps, Divider, styled } from '@mui/material';
import Vishwabrahmand from '@icons/logo/Vishwabrahmand';

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'end',
}));

const StyledTitleText = styled(TitleText)(({ theme }) => ({
  fontSize: '1.125rem',
  whiteSpace: 'nowrap',
  lineHeight: '1.75',
}));

const StyledBrahmwareWeblab = styled(BrahmwareWeblab)(({ theme }) => ({
  width: '10rem',
  height: '4rem',
}));

const StyledVishwabrahmand = styled(Vishwabrahmand)(({ theme }) => ({
  width: '10rem',
  height: '4rem',
}));

interface TechProviderProps extends BoxProps {
  children?: React.ReactNode;
};

const TechProvider: React.FC<TechProviderProps> = (props) => {
  return (
    <Box {...props}>
      <StyledWrapper>
        <StyledTitleText>Marg Darshak</StyledTitleText>
        <Link
          href='https://vishwabrahmand.com'
          target='_blank'
        >
          <StyledVishwabrahmand />
        </Link>
      </StyledWrapper>
      <Divider orientation='vertical' flexItem sx={{ mx: '2rem' }} />
      <StyledWrapper>
        <StyledTitleText>Technology Partner</StyledTitleText>
        <Link
          href='https://brahmware.com'
          target='_blank'
        >
          <StyledBrahmwareWeblab />
        </Link>
      </StyledWrapper>
    </Box>
  )
};

export default styled(TechProvider)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '17 / 19',
  width: 'max-content',

  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',

  '@media screen and (max-height: 1080px)': {
    gridRow: '16 / 19',
  },
}));