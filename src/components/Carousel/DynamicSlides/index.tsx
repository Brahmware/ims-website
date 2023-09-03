import React, { useState } from 'react';
import carouselData from '../carouselData';
import UnitSlide from './UnitSlide';
import { Splide, SplideProps } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

interface SplideEvent {
  index: number;
};

const arrowPath = 'M15.71 3.854 13.685 5.951 28.153 19.923 13.858 34.074 15.91 36.146 32.315 19.904 15.71 3.854z';
const options: SplideProps["options"] = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: false,
  arrows: true,
  arrowPath,
  /* autoplay: true,
  pauseOnHover: false, */
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

const DynamicSlides: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [splide, setSplide] = useState<SplideEvent | null>(null);  // Initialize with null

  return (
    <Splide
      options={options}
      onActive={(splideEvent: SplideEvent) => {
        setActiveSlide(splideEvent.index);
        setSplide(splideEvent);
      }}
    >
      {carouselData.map((slideData, key) => (
        <React.Fragment key={`slide-${key}`}>
          <UnitSlide
            {...slideData}
            active={activeSlide === key}
            splide={splide}
          />
        </React.Fragment>
      ))}
    </Splide>
  );
};

export default DynamicSlides;