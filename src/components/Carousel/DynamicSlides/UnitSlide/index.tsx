import React from 'react'
import Image from 'next/image';
import { CarouselData } from '../../carouselData';
import { styled } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import CarouselDataCard from './CarouselDataCard';


const StyledImage = styled(Image)(({ theme }) => ({
  height: `calc(100dvh - ${theme.Heights.header.default})`,
  width: '100%',
  objectFit: 'cover',
}));

interface UnitSlideProps extends CarouselData {
  splide?: any;
};

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
  let slideKey = `slide-${id}`;

  if (typeof window === 'undefined') {
    slideTitle = 'Loading...';
    slideImage = '/images/placeholder.png';
    slideId = 0;
  }

  return (
    <SplideSlide
      key={slideKey}
      data-splide-interval={pauseTime}
      {...props}
    >
      <StyledImage width="900" height="600" src={image} alt={title} />
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

export default styled(UnitSlide)(() => ({
  '&.is-active.is-visible .carousel-data-card': {
    transform: 'translateY(0%)',
  },
}));