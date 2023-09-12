import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled, alpha, useTheme as useThemeMui } from '@mui/material';
import { useTheme as useThemeNext } from 'next-themes';


export const MoonIcon = ({ hovered, active, ...props }: UtilityIconProps) => {
  const system = useThemeNext().theme === 'system';
  const dark = useThemeMui().palette.mode === 'dark';
  const primary = useThemeMui().palette.primary.main;

  return (
    <React.Fragment>
      <svg
        {...svgCommonProps}
        data-name='Moon Icon'
        width='18.16863'
        height='18.16863'
        viewBox='0 0 18.16863 18.16863'
        {...props}
      >
        <path 
          d='M9.08392,15.20921a6.12494,6.12494,0,0,0,6.12491-6.1249c0-.2834-.42477-.33026-.57133-.08771A3.98161,
          3.98161,0,1,1,9.17164,3.53071c.24254-.14654.19568-.57131-.08772-.57131a6.12491,6.12491,0,0,0,0,12.24981Z' 
        />
        {system && dark && !active && (
          <circle
            cx='9.08392'
            cy='9.08392'
            r='1.5'
            fill={alpha(primary, 1)}
            transform='translate(7.75 -7.75)'
          />
        )}
      </svg>
    </React.Fragment>
  )
};

export default styled(MoonIcon)(({ theme, active }) => {

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