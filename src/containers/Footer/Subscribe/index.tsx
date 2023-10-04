import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import InputSubscription from './InputSubscription';
import ButtonSubscription from './ButtonSubscription';

const SubscribeWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  position: 'relative',
  margin: 0,
  padding: 0,
}));

interface SubscribeProps extends BoxProps {
  children?: React.ReactNode;
};

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <Box {...props}>
      <SubscribeWrapper>
        <InputSubscription />
        <ButtonSubscription />
      </SubscribeWrapper>
    </Box>
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
    gridColumn: '2 / 20',
    gridRow: '6 / 7',
    alignItems: 'center',
    justifySelf: 'center',
  },

}));