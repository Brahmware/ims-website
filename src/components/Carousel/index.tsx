import { styled, alpha } from '@mui/material';
import React from 'react';
import DynamicSlides from './DynamicSlides';

const StyledSplideWrapper = styled('div')(({ theme }) => ({
  '& .splide__slide': {
    height: '100%',
    width: '100%',
    zIndex: -1,
  },

  '& .splide__arrow--prev, & .splide__arrow--next': {
    zIndex: theme.Shadows.lower.zIndex,
    backgroundColor: alpha(theme.palette.background.default, 0.33),
    backdropFilter: 'blur(0.33rem)',
    fontSize: '1.25rem',
    transform: 'translateY(-7rem)',
    height: '10rem',
    width: '6rem',
    borderRadius: '1.618rem',
    opacity: 1,
    transition: 'all 0.3s ease-in-out',
    '& path': {
      fill: theme.palette.text.primary,
    },

    '&::before': {
      color: alpha(theme.palette.primary.main, 0.25),
    },
  },
}));

const Carousel = () => {

  return (
    <StyledSplideWrapper>
      <DynamicSlides />
    </StyledSplideWrapper>
  );
};

export default Carousel;