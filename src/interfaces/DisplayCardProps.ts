import { CardProps as MuiCardProps } from '@mui/material';

export interface DisplayCardProps extends MuiCardProps {
};

export interface NavigationCardProps extends DisplayCardProps {
  open?: boolean;
};