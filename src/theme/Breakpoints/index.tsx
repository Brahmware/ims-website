import { Breakpoints as MuiBreakpoints } from '@mui/material';

interface Values {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const values: Values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

interface Heights {
  short: number;
  medium: number;
  tall: number;
}

export const heights: Heights = {
  short: 0,
  medium: 400,
  tall: 800,
};

interface Misc {
  navGroupTablet: number;
}

export const misc: Misc = {
  navGroupTablet: 1190,
};

export interface Breakpoints {
  values: Values;
  heights: Heights;
  misc: Misc;
  keys: (keyof Values | keyof Heights | keyof Misc)[];
  up: (key: keyof Values | keyof Heights | keyof Misc) => string;
  down: (key: keyof Values | keyof Heights | keyof Misc) => string;
  between: (start: keyof Values | keyof Heights | keyof Misc, end: keyof Values | keyof Heights | keyof Misc) => string;
  only: (key: keyof Values | keyof Heights | keyof Misc) => string;
  not: (key: keyof Values | keyof Heights | keyof Misc) => string;
  unit: 'px' | 'em' | 'rem';
}

export const breakpoints: Breakpoints = {
  values,
  heights,
  misc,
  keys: [...Object.keys(values), ...Object.keys(heights), ...Object.keys(misc)] as (keyof Values | keyof Heights | keyof Misc)[],
  up: (key: keyof Values | keyof Heights | keyof Misc) => {
    if (key in values) {
      return `@media (min-width:${values[key as keyof Values]}px)`;
    } else if (key in heights) {
      return `@media (min-height:${heights[key as keyof Heights]}px)`;
    } else if (key in misc) {
      return `@media (min-width:${misc[key as keyof Misc]}px)`;
    }
    return ''; // Handle the case where the key is not found
  },
  down: (key: keyof Values | keyof Heights | keyof Misc) => {
    if (key in values) {
      return `@media (max-width:${values[key as keyof Values]}px)`;
    } else if (key in heights) {
      return `@media (max-height:${heights[key as keyof Heights]}px)`;
    } else if (key in misc) {
      return `@media (max-width:${misc[key as keyof Misc]}px)`;
    }
    return ''; // Handle the case where the key is not found
  },
  between: (start: keyof Values | keyof Heights | keyof Misc, end: keyof Values | keyof Heights | keyof Misc) => {
    const minValue = values[start as keyof Values] || heights[start as keyof Heights] || misc[start as keyof Misc];
    const maxValue = values[end as keyof Values] || heights[end as keyof Heights] || misc[end as keyof Misc];
    if (minValue && maxValue) {
      return `@media (min-width:${minValue}px) and (max-width:${maxValue}px)`;
    } else if (minValue && !maxValue) {
      return `@media (min-width:${minValue}px) and (min-height:${maxValue}px)`;
    } else if (!minValue && maxValue) {
      return `@media (max-width:${minValue}px) and (max-height:${maxValue}px)`;
    }
    return ''; // Handle the case where the values are not found
  },
  only: (key: keyof Values | keyof Heights | keyof Misc) => {
    const index = breakpoints.keys.indexOf(key);
    const nextKey = breakpoints.keys[index + 1];
    if (key in values) {
      return nextKey ? breakpoints.between(key, nextKey) : breakpoints.up(key);
    } else if (key in heights) {
      return nextKey ? breakpoints.between(key, nextKey) : breakpoints.up(key);
    } else if (key in misc) {
      return nextKey ? breakpoints.between(key, nextKey) : breakpoints.up(key);
    }
    return ''; // Handle the case where the key is not found
  },
  not: (key: keyof Values | keyof Heights | keyof Misc) => `@media (not ${breakpoints.up(key)})`,
  unit: 'px',
};
