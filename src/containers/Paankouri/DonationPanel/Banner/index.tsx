import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: theme.Shadows.low.zIndex - 1,
}));

const StyledVideo = styled('video')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: theme.Shadows.low.zIndex - 2,
}));

interface BannerProps extends BoxProps {
  children?: React.ReactNode;
};

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <Box {...props}>
      <StyledImage
        src={'/images/donation-panel/tv_on_head.webp'}
        alt={'Donbation Panel Banner'}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center'}
      />
      <StyledVideo
        autoPlay
        muted
        loop
      >
        <source src={'/videos/donation-panel/indian_market.mp4'} type="video/mp4" />
      </StyledVideo>
    </Box>
  )
};

export default styled(Banner)(({ theme }) => ({
  width: '100%',
  gridColumn: '1 / 6',
  aspectRatio: '16 / 9',
  position: 'relative',
}));