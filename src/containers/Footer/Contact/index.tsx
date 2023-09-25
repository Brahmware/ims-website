import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';

interface ContactProps extends BoxProps {
};

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <Box {...props}>
      Contact
    </Box>
  )
};

export default styled(Contact)(({ theme }) => ({
  gridColumn: '1 / 10',
  gridRow: '16 / 19',
  border: '1px solid pink'
}));