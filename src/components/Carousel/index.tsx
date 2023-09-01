import { styled, alpha } from '@mui/material';
import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import dynamic from 'next/dynamic';

const StyledSplideWrapper = styled('div')(({ theme }) => ({
  '& .splide__slide': {
    height: '100%',
    width: '100%',
    zIndex: -1,
  },

  '& .splide__arrow--prev, & .splide__arrow--next': {
    zIndex: 1,
    backgroundColor: theme.palette.background.default,
    fontSize: '1.25rem',
    transform: 'translateY(-7rem)',
    height: '10rem',
    width: '6rem',
    borderRadius: '1.618rem',
    opacity: 0.5,
    transition: 'all 0.3s ease-in-out',

    '& path': {
      fill: theme.palette.primary.main,
    },

    '&::before': {
      color: alpha(theme.palette.primary.main, 0.25),
    },
  },
}));

const arrowPath = 'M15.71 3.854 13.685 5.951 28.153 19.923 13.858 34.074 15.91 36.146 32.315 19.904 15.71 3.854z';
const options = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: false,
  arrows: true,
  arrowPath,
  autoplay: true,
  pauseOnHover: true,
  interval: 5000,
  gap: '1rem',
  padding: '9.5rem',
  breakpoints: {
    900: {
      perPage: 2,
      arrows: false,
    },
    768: {
      perPage: 1,
      arrows: false,
    },
  },
};

interface DynamicSplideProps {
  options?: any;
  children?: React.ReactNode;
};

// Explicitly naming the component
const DynamicSplide = dynamic<DynamicSplideProps>(() => import('@splidejs/react-splide').then((mod) => mod.Splide), {
  ssr: false,
});


const StyledImage = styled(Image)(({ theme }) => ({
  height: `calc(100dvh - ${theme.Heights.header.default})`,
  width: '100%',
  objectFit: 'cover',
}));

const Carousel = () => {

  return (
    <StyledSplideWrapper>
      <DynamicSplide options={options}>
        <SplideSlide>
          <StyledImage
            width="1920"
            height="1080"
            src="/images/home/container-1/slide-1.jpg"
            alt="lol"
          />

        </SplideSlide>
        <SplideSlide>
          <StyledImage
            width="1920"
            height="1080"
            src="/images/home/container-1/slide-2.jpg"
            alt="lol"
          />

        </SplideSlide>
        <SplideSlide>
          <StyledImage
            width="1920"
            height="1080"
            src="/images/home/container-1/slide-3.jpg"
            alt="lol"
          />

        </SplideSlide>
        <SplideSlide>
          <StyledImage
            width="1920"
            height="1080"
            src="/images/home/container-1/slide-5.jpg"
            alt="lol"
          />

        </SplideSlide>
        <SplideSlide>
          <StyledImage
            width="1920"
            height="1080"
            src="/images/home/container-1/slide-6.jpg"
            alt="lol"
          />

        </SplideSlide>
      </DynamicSplide>
    </StyledSplideWrapper>
  );
};

export default Carousel;