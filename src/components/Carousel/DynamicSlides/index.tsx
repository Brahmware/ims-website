import React, { useState } from 'react';
import carouselData from '../carouselData';
import UnitSlide from './UnitSlide';
import { Splide, SplideProps, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProgressBarPlaceholder from './ProgressBarPlaceholder';
import theme from '@theme/index';
import { SplideInstance } from '@interfaces/SplideInterface';

const options: SplideProps["options"] = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: false,
  autoplay: true,
  resetProgress: false,
  pauseOnHover: false,
  gap: theme.Spaces.md,
  padding: '9.5rem',
};


const DynamicSlides: React.FC = () => {
  const [splide, setSplide] = useState<SplideInstance | null>(null);  // Initialize with null
  const splideRef = React.useRef<any>(null);  // Initialize with null

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
      <ProgressBarPlaceholder />
    </Splide>
  );
};


export default DynamicSlides;