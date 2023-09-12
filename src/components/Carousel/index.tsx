import { styled, alpha } from '@mui/material';
import React from 'react';
import dynamic from 'next/dynamic';

const StyledSplideWrapper = styled('div')(({ theme }) => ({
  '& .splide__slide': {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },

  '& .splide__arrow': {
    zIndex: theme.Shadows.lower.zIndex,
    margin: `0 ${theme.Spaces.lg}`,
    backgroundColor: alpha(theme.palette.background.default, 0.33),
    boxShadow: theme.shadows[4],
    backdropFilter: 'blur(0.33rem)',
    height: '4rem',
    width: '4rem',
    borderRadius: '50%',
    opacity: 1,
    transition: theme.Transitions.createTransition({
      property: 'opacity',
      duration: 'shortest',
    }),


    '& path': {
      fill: theme.palette.text.secondary,
    },

    '&::before': {
      color: alpha(theme.palette.primary.main, 0.25),
    },

    '&:hover': {
      opacity: 1,
    },
  },
}));

const DynamicSlides = dynamic(() => import('./DynamicSlides'), {
  ssr: false,
});

const Carousel = () => {

  return (
    <StyledSplideWrapper>
      <DynamicSlides />
    </StyledSplideWrapper>
  );
};

export default Carousel;