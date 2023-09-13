import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled, alpha, useTheme as useThemeMui } from '@mui/material';
import { useTheme as useThemeNext } from 'next-themes';


const SunIcon = ({ hovered, active, ...props }: UtilityIconProps) => {
  const system = useThemeNext().theme === 'system';
  const light = useThemeMui().palette.mode === 'light';
  const primary = useThemeMui().palette.primary.main;

  return (
    <svg
      {...svgCommonProps}
      data-name='Sun Icon'
      width='18.16863'
      height='18.16863'
      viewBox='0 0 18.16863 18.16863'
      {...props}
    >
      <path id='star' d="M14.15737,10A4.15739,4.15739,0,1,1,10,5.8426,4.15742,4.15742,0,0,1,14.15737,10Z" />
      <path 
        id='glare' 
        d="M6.03338,5.12586a.74833.74833,0,1,1-.74833-.74833A.74833.74833,0,0,1,6.03338,5.12586ZM3.97178,10a.74833.74833,0,1,1-.74833-.74832A.74833.74833,0,0,1,3.97178,10ZM6.0321,14.71741a.74833.74833,0,1,1-.74833-.74833A.74833.74833,0,0,1,6.0321,14.71741Zm4.71621-11.494A.74833.74833,0,1,1,10,2.47512.74833.74833,0,0,1,10.74831,3.22345Zm0,13.55307A.74833.74833,0,1,1,10,16.02819.74832.74832,0,0,1,10.74831,16.77652Zm4.69593-2.05778a.74833.74833,0,1,1-.74833-.74833A.74833.74833,0,0,1,15.44424,14.71874ZM17.52484,10a.74833.74833,0,1,1-.74832-.74833A.74831.74831,0,0,1,17.52484,10Zm-2.0695-4.87413a.74833.74833,0,1,1-.74833-.74833A.74833.74833,0,0,1,15.45534,5.12586Z"
      />
      {system && light && !active && (
        <circle
          cx='9.08392'
          cy='9.08392'
          r='1.5'
            fill={alpha(primary, 1)}
            transform='translate(7.75 -7.75)'
        />
      )}
    </svg>
  )
};

export default styled(SunIcon)(({ theme, active }) => {

  const pathCommon = {
    transition: theme.transitions.create('fill', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    fill: alpha(theme.palette.text.secondary, 0.8),
  };

  if (active) {
    return {
      '& path': {
        ...pathCommon,
        fill: theme.palette.primary.main,
      },
    }
  };

  return {
    '& path': { ...pathCommon },

    '&:hover path': {
      fill: theme.palette.text.secondary,
    },
  };
});