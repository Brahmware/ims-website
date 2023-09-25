import React from 'react';
import { BoxProps, Box, styled } from '@mui/material';

interface CopyrightProps extends BoxProps {
};

const Copyright: React.FC<CopyrightProps> = (props) => {
  return (
    <Box {...props}>
      Copyright
    </Box>
  )
};

export default styled(Copyright)(({ theme }) => ({
  gridColumn: '1 / 10',
  gridRow: '20 / 21',
  border: '1px solid red'
}));