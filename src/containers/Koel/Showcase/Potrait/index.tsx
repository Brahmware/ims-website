import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';
import { ShowcaseImage } from '..';

const PotraitImage = styled(Image)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

interface PotraitProps extends BoxProps {
  image: ShowcaseImage
}

const Potrait: React.FC<PotraitProps> = ({ image, ...props }) => {
  return (
    <Box {...props}>
      <PotraitImage
        src={image.src}
        alt={image.description || 'Potrait image Indian Media Syndicate'}
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
  gridColumn: '6 / 17',
  gridRow: '4 / 18',
  aspectRatio: '1 / 1.33',
  backgroundColor: theme.palette.background.default,
  borderRadius: '1.6rem',
  border: `${theme.Spaces.sm} solid ${theme.palette.background.default}`,
  position: 'relative',
  overflow: 'hidden',

  [theme.Breakpoints.down('lg')]: {
    gridColumn: '2 / 9',
    gridRow: '7 / 21',
  },

  [theme.Breakpoints.down('md')]: {
    gridColumn: '13 / 20',
    gridRow: '4 / 13',
    aspectRatio: '1 / 1',
  },

  [theme.Breakpoints.down('sm')]: {
    gridColumn: '9 / 20',
    gridRow: '4 / 10',
  },
  
  [theme.Breakpoints.down('xs')]: {
    gridColumn: '2 / 20',
    gridRow: '3 / 9',
  },
    
}));