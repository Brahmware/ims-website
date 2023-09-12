import React from 'react';
import { Box, BoxProps, alpha, styled } from '@mui/material';
import Image from 'next/image';

const RibbonImage = styled(Image)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: -2,
  filter: theme.Filters.belowGlass,
}));

const Filter = styled('div')(({theme}) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  backgroundColor: alpha(theme.palette.primary.main, 0.25),
  zIndex: -1
}));

const Ribbon: React.FC<BoxProps> = ({
  ...props
}) => {
  return (
    <Box {...props}>
      <Filter />
      <RibbonImage
        src="/images/home/container-2/image-bottom.jpg"
        alt="Ribbon"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Box>
  )
};

export default styled(Ribbon)(({ theme }) => ({
  height: '100%',
  width: '100%',
  gridColumn: '1 / 5',
  gridRow: '1 / 11',
  position: 'relative',
}));