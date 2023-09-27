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
  gridRow: '16 / 19',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',

  '@media screen and (max-height: 1080px)': {
    gridRow: '10 / 19',
  },
  
  '@media screen and (max-height: 720px)': {
    gridRow: '13 / 18',
  },

}));