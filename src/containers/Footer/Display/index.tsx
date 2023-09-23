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
  height: '100%',
  width: '100%',
  backgroundColor: 'green',
  gridColumn: '1 / 10',
  gridRow: '1 / 8',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));