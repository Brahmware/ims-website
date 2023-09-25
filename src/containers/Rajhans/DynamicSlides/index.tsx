import React, { useState } from 'react';
import carouselData from '../carouselData';
import UnitSlide from './UnitSlide';
import { Options, Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProgressBarPlaceholder from './ProgressBarPlaceholder';
import theme from '@theme/index';
import { SplideInstance } from '@interfaces/SplideInterface';
import SplideButtons from './SplideButtons';
import SplidePagination from './SplidePagination';
import Observer from '@components/Observer';

const options: Options = {
  type: 'loop',
  speed: theme.Transitions.durations.long,
  easing: theme.Transitions.easings.easeInOut,
  perPage: 1,
  perMove: 1,
  lazyLoad: 'nearby',
  drag: 'free',
  snap: true,
  pagination: true,
  autoplay: false,
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
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const splideRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (splideRef.current) {
      setSplide(splideRef.current.splide);
      setActiveIndex(splideRef.current.splide.Components.Controller.getIndex());
    }
  }, [splideRef]);

  const handleOnIntersect = () => {
    splide?.Components.Autoplay.play();
    setVisible(true);
  };

  const handleOnNoIntersect = () => {
    splide?.Components.Autoplay.pause();
    setVisible(false);
  };

  const handleOnSplideMove = (slide: any) => {
    setActiveIndex(slide.Components.Controller.getIndex());
  };

  return (
    <Observer
      onIntersect={handleOnIntersect}
      onNoIntersect={handleOnNoIntersect}
    >
      <Splide
        options={options}
        ref={splideRef}
        hasTrack={false}
        onMove={handleOnSplideMove}
      >
        <SplideTrack>
          {carouselData.map((slideData, index) => (
            <React.Fragment key={`slide-${index}`}>
              <UnitSlide
                {...slideData}
                carouselVisible={visible}
                splide={splide}
                active={activeIndex === index}
              />
            </React.Fragment>
          ))}
        </SplideTrack>
        <SplideButtons />
        <ProgressBarPlaceholder />
        <SplidePagination />
      </Splide>
    </Observer>
  );
};

export default DynamicSlides;