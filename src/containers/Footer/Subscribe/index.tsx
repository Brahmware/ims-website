import React from 'react';
import { Box, BoxProps, Divider, styled } from '@mui/material';
import InputSubscription from './InputSubscription';
import ButtonSubscription from './ButtonSubscription';

const SubscribeWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  position: 'relative',
  margin: 0,
  padding: 0,

  '@media screen and (max-width: 510px)': {
    width: '100%'
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  display: 'none',
  width: '100%',
  height: '0.01px',
  backgroundColor: theme.palette.divider,
  margin: '0 auto',
  marginTop: theme.Spaces.lg,
  marginBottom: theme.Spaces.lg,

  '@media screen and (max-width: 960px)': {
    display: 'flex',
    gridColumn: '1 / 21',
    gridRow: '5 / 6',
    marginTop: theme.Spaces.xl,
    marginBottom: theme.Spaces.xl,
  },
}));

interface SubscribeProps extends BoxProps {
  children?: React.ReactNode;
};

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <React.Fragment>
      <Box {...props}>
        <SubscribeWrapper>
          <InputSubscription />
          <ButtonSubscription />
        </SubscribeWrapper>
      </Box>
      <StyledDivider />
    </React.Fragment>
  )
};

export default styled(Subscribe)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '16 / 17',
  display: 'flex',
  width: 'max-content',
  alignItems: 'start',
  justifySelf: 'start',

  '@media screen and (max-height: 1080px)': {
    alignItems: 'end',
    gridRow: '13 / 15',
  },

  '@media screen and (max-width: 1360px)': {
    gridColumn: '13 / 21',
  },

  '@media screen and (max-width: 1180px)': {
    gridColumn: '10 / 16',
    gridRow: '17 / 20',
    justifySelf: 'end',
    alignItems: 'start',
  },

  '@media screen and (max-width: 960px)': {
    gridColumn: '1 / 21',
    gridRow: '5 / 6',
    alignItems: 'center',
    justifySelf: 'center',
  },

  '@media screen and (max-width: 510px)': {
    width: '100%',
    justifyContent: 'center',
  },

}));