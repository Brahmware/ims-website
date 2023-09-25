import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import CarouselDataCard from './CarouselDataCard';
import { UnitSlideProps } from '@interfaces/SplideInterface';

const StyledVideo = styled('video')(({ theme }) => ({
  height: `calc(100dvh - ${theme.Heights.header.default})`,
  width: '100%',
  objectFit: 'cover',
}));

const UnitSlide: React.FC<UnitSlideProps> = ({
  video,
  tagline,
  title,
  bluredImage,
  id,
  description,
  link,
  pauseTime,
  splide,
  carouselVisible,
  active,
  ...props
}) => {
  let slideTitle = title;
  let slideVideo = video;
  let slideId = id;

  if (typeof window === 'undefined') {
    slideTitle = 'Loading...';
    slideVideo = '/videos/white_noise.web';
    slideId = 0;
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active && carouselVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [active, carouselVisible]);

  return (
    <SplideSlide {...props} data-splide-interval={pauseTime}>
      <StyledVideo
        ref={videoRef}
        src={slideVideo}
        muted
        loop
        playsInline
        width="1280"
        height="720"
      />
      <CarouselDataCard
        title={slideTitle}
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
