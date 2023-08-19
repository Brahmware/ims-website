import { UtilityIconProps } from '@interfaces/SVGProps';
import { styled } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps';
import React from 'react';

const SearchIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Search Icon'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M17 17L21 21' stroke='#323232' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z' stroke='#323232' strokeWidth='2' />
    </svg>
  )
};

export default styled(SearchIcon)(({ theme }) => ({
  '& path': {
    stroke: theme.palette.text.primary,
    strokeWidth: theme.Strokes.thin,
  },
}));