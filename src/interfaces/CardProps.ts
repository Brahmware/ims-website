import { CardProps as MuiCardProps } from '@mui/material';

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