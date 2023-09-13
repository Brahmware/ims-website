import React from 'react';
import { Box, BoxProps, alpha, styled } from '@mui/material';
import Image from 'next/image';
import { ShowcaseImage } from '..';

const RibbonImage = styled(Image)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: -2,
  filter: theme.Filters.belowGlass,
}));

const Filter = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  backgroundColor: alpha(theme.palette.primary.main, 0.25),
  zIndex: -1
}));

interface RibbonProps extends BoxProps {
  direction?: 'ltr' | 'rtl';
  image: ShowcaseImage
}

const Ribbon: React.FC<RibbonProps> = ({
  direction = 'ltr',
  image,
  ...props
}) => {
  return (
    <Box {...props}>
      <Filter />
      <RibbonImage
        src={image.src}
        alt={image.description || 'Ribbon image Indian Media Syndicate'}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Box>
  )
};

export default styled(Ribbon)(({ theme, direction }) => ({
  height: '100%',
  width: '100%',
  gridColumn: (direction === 'ltr') ? '1 / 10' : '11 / 21',
  gridRow: '1 / 21',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    gridColumn: '1 / 21',
    gridRow: '1 / 8',
  }
}));