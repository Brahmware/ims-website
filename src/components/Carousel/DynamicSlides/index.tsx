import React, { useState } from 'react';
import carouselData from '../carouselData';
import UnitSlide from './UnitSlide';
import { Splide, SplideProps, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProgressBarPlaceholder from './ProgressBarPlaceholder';
import theme from '@theme/index';

interface SplideEvent {
  index: number;
};

const options: SplideProps["options"] = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: false,
  autoplay: true,
  pauseOnHover: false,
  gap: theme.Spaces.md,
  padding: '9.5rem',
};


const DynamicSlides: React.FC = () => {
  const [splide, setSplide] = useState<SplideEvent | null>(null);  // Initialize with null

  return (
    <Splide
      options={options}
      onActive={(splideEvent: SplideEvent) => {
        setSplide(splideEvent);
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {carouselData.map((slideData, key) => (
          <React.Fragment key={`slide-${key}`}>
            <UnitSlide
              {...slideData}
              splide={splide}
            />
          </React.Fragment>
        ))}
      </SplideTrack>
      <ProgressBarPlaceholder />
    </Splide>
  );
};

export default DynamicSlides;