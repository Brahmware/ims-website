import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';
import { Donation } from '@datatypes/Donation';

const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%',
  gridRow: '1 / 11',
  gridColumn: '1 / 11',
  objectFit: 'cover',
  zIndex: theme.Shadows.low.zIndex - 1,
}));

const StyledVideo = styled('video')(({ theme }) => ({
  gridRow: '2 / 9',
  gridColumn: '3/ 9',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: theme.Shadows.low.zIndex - 2,
}));

interface BannerProps extends BoxProps{
  title?: Donation['title'];
  videoUrl?: Donation['videoUrl'];
  children?: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({
  title,
  videoUrl,
  ...props
}) => {
  return (
    <Box
      {...props}
      aria-label={title?.toLocaleLowerCase() + ' banner with video background'}
      vocab={title?.toLocaleLowerCase() + ' banner with video background'}
    >
      <StyledImage
        src='/images/donation-panel/tv_on_head.webp'
        alt='tv on head'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
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
  gridColumn: '1 / 6',
  gridRow: '2 / 3',
  width: '100%',
  height: '100%',
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
}));