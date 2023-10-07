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

  '@media screen and (max-width: 510px)': {
    alignItems: 'center',
    justifyContent: 'center',
  },
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

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: '2.5rem',
  alignSelf: 'center',
  margin: '0 2rem',

  '@media screen and (max-width: 1180px)': {
    display: 'none',
  },

  '@media screen and (max-width: 960px)': {
    display: 'flex',
  },

  '@media screen and (max-width: 510px)': {
    height: '1px',
    width: '1rem',
    backgroundColor: theme.palette.divider,
    margin: theme.Spaces.xxs + ' 0'
  },
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
      <StyledDivider
        flexItem
        orientation='vertical'
      />
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
  gridRow: '17 / 20',
  width: 'max-content',
  height: 'max-content',
  alignSelf: 'end',

  display: 'flex',
  justifySelf: 'start',
  alignItems: 'center',

  '@media screen and (max-height: 1080px)': {
    gridRow: '16 / 20',
  },

  '@media screen and (max-width: 1360px)': {
    gridColumn: '13 / 21',
  },

  '@media screen and (max-width: 1236px)': {
    gridRow: '16 / 20',

    '@media screen and (max-height: 1080px)': {
      alignSelf: 'start',
    },
  },

  '@media screen and (max-width: 1180px)': {
    gridColumn: '1 / 11',
    gridRow: '14 / 20',
    justifySelf: 'start',
    alignSelf: 'end',
    flexDirection: 'column',
    gap: theme.Spaces.xxs,
  },

  '@media screen and (max-width: 960px)': {
    gridColumn: '11 / 21',
    gridRow: '7 / 8',
    justifySelf: 'end',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: theme.Spaces.xxs,
  },

  '@media screen and (max-width: 840px)': {
    gridColumn: '1 / 21',
    gridRow: '7 / 8',
    justifySelf: 'center',
  },

  '@media screen and (max-width: 510px)': {
    justifySelf: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.Spaces.xxs,
  },
}));