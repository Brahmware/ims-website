import React from 'react';
import dynamic from 'next/dynamic';
import carouselData from '../carouselData';
import DynamicSlide from './UnitSlide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


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
  onMove?: (splide: any, newIndex: number) => void;
};

// Explicitly naming the component
const DynamicSplide = dynamic<DynamicSplideProps>(() => import('@splidejs/react-splide').then((mod) => mod.Splide), {
  ssr: false,
});

const DynamicSlides = () => {
  return (
    <DynamicSplide
      options={options}
      onMove={(splide, newIndex) => {
        console.log('splide', splide);
        console.log('moved', newIndex);
      }}
    >
      {carouselData.map((slideData, key) => (
        <React.Fragment key={`slide-${key}`}>
          <DynamicSlide active {...slideData} />
        </React.Fragment>
      ))}
    </DynamicSplide>
  )
}

export default DynamicSlides