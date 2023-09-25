import { CarouselData } from "@containers/Rajhans/carouselData";

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
    },
    AutoScroll: {
      pause: () => void;
      play: () => void;
      mount: () => void;
      isPaused: () => boolean;
      destroy: () => void;
    },
  }
};

export interface UnitSlideProps extends CarouselData {
  splide: SplideInstance | null;
  active?: boolean;
  carouselVisible?: boolean;
};
