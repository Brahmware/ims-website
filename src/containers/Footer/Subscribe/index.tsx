import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

interface SubscribeProps extends BoxProps {
};

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <Box {...props}>
      Subscribe
    </Box>
  )
};

export default styled(Subscribe)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '14 / 16',
  border: '1px solid skyblue'
}));