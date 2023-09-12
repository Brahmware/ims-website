import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import Ribbon from './Ribbon';
import Potrait from './Potrait';

export type ShowcaseImage = {
  src: string;
  alt?: string;
  description?: string;
}
interface KoelShowcaseProps extends BoxProps {
  top: ShowcaseImage,
  bottom: ShowcaseImage
};

const Showcase: React.FC<KoelShowcaseProps> = ({
  top,
  bottom,
  ...props
}) => {
  return (
    <Box {...props}>
      <Ribbon image={bottom} />
      <Potrait image={top} />
    </Box>
  )
};

export default styled(Showcase)(({ theme }) => ({
  width: '50%',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(20, 1fr)',
}));