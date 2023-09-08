import React from 'react'
import Image from 'next/image';
import { styled } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import CarouselDataCard from './CarouselDataCard';
import { UnitSlideProps } from '@interfaces/SplideInterface';


const StyledImage = styled(Image)(({ theme }) => ({
  height: `calc(100dvh - ${theme.Heights.header.default})`,
  width: '100%',
  objectFit: 'cover',
}));

const UnitSlide: React.FC<UnitSlideProps> = ({
  image,
  tagline,
  title,
  id,
  description,
  link,
  pauseTime,
  splide,
  ...props
}) => {

  let slideTitle = title;
  let slideImage = image;
  let slideId = id;

  if (typeof window === 'undefined') {
    slideTitle = 'Loading...';
    slideImage = '/images/placeholder.png';
    slideId = 0;
  };

  return (
    <SplideSlide
      {...props}
      data-splide-interval={pauseTime}
    >
      <StyledImage
        width="900"
        height="600"
        src={image}
        alt={title}
      />
      <CarouselDataCard
        title={title}
        tagline={tagline}
        description={description}
        link={link}
        pauseTime={pauseTime}
        splide={splide}
      />
    </SplideSlide>
  );
};

export default styled(UnitSlide)(({ theme }) => ({
  '&.is-active.is-visible .carousel-data-card': {
    transform: 'translateY(0%)',

    [theme.breakpoints.down('md')]: {
      transform: 'translate(-50%, 0%)',
    },
  },
}));