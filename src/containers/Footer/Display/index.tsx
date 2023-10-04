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
  maxHeight: '750px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media screen and (max-width: 1360px)': {
    gridColumn: '1 / 12',
  },

  '@media screen and (max-width: 1180px)': {
    gridRow: '1 / 14',
    gridColumn: '1 / 16',
  },

  '@media screen and (max-width: 960px)': {
    gridRow: '2 / 3',
    gridColumn: '2 / 20',
  },
}));