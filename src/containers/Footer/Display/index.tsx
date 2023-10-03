import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Chatak from '@containers/Chatak';

interface DisplayProps extends BoxProps {
};

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <Box {...props}>
      <Chatak />
    </Box>
  )
};

export default styled(Display) (({ theme }) => ({
  position: 'relative',
  gridColumn: '1 / 10',
  gridRow: '1 / 16',
  height: '100%',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media screen and (max-width: 1360px)': {
    gridColumn: '1 / 12',
  },
}));