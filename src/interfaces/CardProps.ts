import { CardProps as MuiCardProps } from '@mui/material';
import { SplideInstance } from './SplideInterface';
import { CarouselData } from '@containers/Rajhans/carouselData';

export interface CardProps extends MuiCardProps {
  component?: React.ElementType;
};

export interface DisplayCardProps extends CardProps {
};

export interface NavigationCardProps extends DisplayCardProps {
  open?: boolean;
};

export interface BarProps extends DisplayCardProps {
  open?: boolean;
};

export interface ThemeChangerWrapperProps extends CardProps {
  elevation?: number;
  name?: string;
  role?: string;
};

export interface CarouselCardProps extends CardProps {
  elevation?: number;
  active?: boolean;
};

export interface CarouselDataCardProps extends CarouselCardProps {
  link: CarouselData['link'];
  tagline: CarouselData['tagline'];
  title: CarouselData['title'];
  description: CarouselData['description'];
  pauseTime: CarouselData['pauseTime'];
  splide?: SplideInstance | null;
};