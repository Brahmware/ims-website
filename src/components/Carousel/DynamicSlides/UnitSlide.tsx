import React from 'react'
import Image from 'next/image';
import { CarouselData } from '../carouselData';
import { styled } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import CarouselDataCard from './CarouselDataCard';


const StyledImage = styled(Image)(({ theme }) => ({
  height: `calc(100dvh - ${theme.Heights.header.default})`,
  width: '100%',
  objectFit: 'cover',
}));



const DynamicSlide = ({ image, title, id, description, link, active }: CarouselData & { active?: boolean }) => {

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
    <SplideSlide key={slideKey}>
      <StyledImage
        width="1920"
        height="1080"
        src={image}
        alt={title}
      />
      <CarouselDataCard className={active ? 'active' : ''}>
        <h1>{title}</h1>
        <p>{description}</p>
      </CarouselDataCard>
    </SplideSlide>
  );
};

export default DynamicSlide;