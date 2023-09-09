import React, { useState } from 'react';
import carouselData from '../carouselData';
import UnitSlide from './UnitSlide';
import { Splide, SplideProps, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProgressBarPlaceholder from './ProgressBarPlaceholder';
import theme from '@theme/index';
import { SplideInstance } from '@interfaces/SplideInterface';
import SplideButtons from './SplideButtons';
import SplidePagination from './SplidePagination';

const options: SplideProps["options"] = {
  type: 'loop',
  speed: theme.Transitions.durations.long,
  easing: theme.Transitions.easings.easeInOut,
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: true,
  autoplay: true,
  resetProgress: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  gap: theme.Spaces.md,
  padding: theme.Spaces.mega,
  keyboard: 'global',
  preloadPages: 2,
  interval: carouselData[0].pauseTime,

  breakpoints: {
    1024: {
      padding: 0,
    },
  },
};


const DynamicSlides: React.FC = () => {
  const [splide, setSplide] = useState<SplideInstance | null>(null);
  const splideRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (splideRef.current) {
      setSplide(splideRef.current.splide);
    }
  }, [splideRef]);

  return (
    <Splide
      options={options}
      ref={splideRef}
      hasTrack={false}
    >
      <SplideTrack>
        {carouselData.map((slideData, index) => (
          <React.Fragment key={`slide-${index}`}>
            <UnitSlide
              {...slideData}
              splide={splide}
            />
          </React.Fragment>
        ))}
      </SplideTrack>
      <SplideButtons />
      <ProgressBarPlaceholder />
      <SplidePagination />
    </Splide>
  );
};


export default DynamicSlides;