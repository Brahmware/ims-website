import React from 'react';
import { BoxProps, Box, styled } from '@mui/material';

interface PrivacyProps extends BoxProps {
};

const Privacy: React.FC<PrivacyProps> = (props) => {
  return (
    <Box {...props}>
      Privacy
    </Box>
  )
};

export default styled(Privacy)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '20 / 21',
  border: '1px solid orange'
}));