import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import Ribbon from './Ribbon';
import Potrait from './Potrait';

interface KoelShowcaseProps extends BoxProps { };

const Showcase: React.FC<KoelShowcaseProps> = ({ ...props }) => {
  return (
    <Box {...props}>
        <Ribbon />
        <Potrait />
    </Box>
  )
};

export default styled(Showcase)(({ theme }) => ({
  width: '50%',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
}));