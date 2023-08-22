import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

export const MoonIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Moon Icon'
      width='18.16863'
      height='18.16863'
      viewBox='0 0 18.16863 18.16863'
      {...props}
    >
      <path id='satellite' d='M9.08392,15.20921a6.12494,6.12494,0,0,0,6.12491-6.1249c0-.2834-.42477-.33026-.57133-.08771A3.98161,3.98161,0,1,1,9.17164,3.53071c.24254-.14654.19568-.57131-.08772-.57131a6.12491,6.12491,0,0,0,0,12.24981Z' />
    </svg>
  )
};

export default styled(MoonIcon)(({ theme, active }) => {
  if (active) {
    return {
      '& path': {
        fill: theme.palette.primary.main,
        transition: theme.transitions.create('fill', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.short,
        }),
      },
    }
  };

  return {
    cursor: 'pointer',
    '& path': {
      fill: theme.palette.text.secondary,
      transition: theme.transitions.create('fill', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
    },
    '&:hover path': {
      fill: theme.palette.text.primary,
    },
  };
});