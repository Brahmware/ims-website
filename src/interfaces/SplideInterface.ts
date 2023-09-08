import { CarouselData } from "@components/Carousel/carouselData";

export interface SplideInstance {
  index: number;
  length: number;
  Components: {
    Autoplay: {
      pause: () => void;
      play: () => void;
      mount: () => void;
      isPaused: () => boolean;
      destroy: () => void;
    }
  }
};

export interface UnitSlideProps extends CarouselData {
  splide: SplideInstance | null;
};
