import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import Ribbon from './Ribbon';
import Potrait from './Potrait';
import { updown } from '..';

export type ShowcaseImage = {
  src: string;
  alt?: string;
  description?: string;
}
export interface KoelShowcaseProps extends BoxProps {
  updown?: updown;
  direction?: 'ltr' | 'rtl';
  top: ShowcaseImage,
  bottom: ShowcaseImage
};

const Showcase: React.FC<KoelShowcaseProps> = ({
  updown,
  direction = 'ltr',
  top,
  bottom,
  ...props
}) => {
  return (
    <Box {...props}>
      <Ribbon image={bottom} direction={direction} />
      <Potrait image={top} direction={direction} updown={updown} />
    </Box>
  )
};

export default styled(Showcase)(({ theme }) => ({
  width: '50%',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(20, 1fr)',

  [theme.Breakpoints.down('lg')]: {
    gridColumn: '1 / 21',
    gridRow: '1 / 21',
    width: '100%',
    height: '100%',
  }
}));