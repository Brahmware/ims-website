import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

const PotraitImage = styled(Image)(({theme}) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

const Potrait: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <PotraitImage
        src="/images/home/container-2/image-top.jpg"
        alt="Potrait"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
    </Box>
  )
};

export default styled(Potrait)(({ theme }) => ({
  width: '100%',
  height: '100%',
  gridColumn: '3 / 9',
  gridRow: '2 / 10',
  aspectRatio: '1 / 1.33',
  backgroundColor: theme.palette.background.default,
  borderRadius: '1.6rem',
  border: `${theme.Spaces.sm} solid ${theme.palette.background.default}`,
  position: 'relative',
  overflow: 'hidden',
}));