import { DividerProps as DividerPropsMui } from '@mui/material';

export type DividerSizes = 'xxs' | 'xs' | 'md' | 'lg' | 'xl' | 'xxl';

export interface DividerProps extends DividerPropsMui {
  size?: DividerSizes;
};