import React from 'react';
import svgCommonProps from '@utils/svgCommonProps';
import { SocialMediaIconProps } from '@interfaces/SVGProps';
import { styled, useTheme, alpha } from '@mui/material';

const XLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      data-name='X.com Logo'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...props}
    >
      <defs>
        <style>
          {`
            .x_com {
              fill: ${!mouse ? alpha(theme.palette.background.default, 0.8) : '#fff'};
            }
            .x_square {
              fill: ${!mouse ? alpha(theme.palette.text.secondary, 0.8) : '#000'};
            }
          `}
        </style>
      </defs>
      <g>
        <path className='x_square' d="M16.80345,19.71429H3.19655A2.91089,2.91089,0,0,1,.28571,16.80345V3.19655A2.91089,2.91089,0,0,1,3.19655.28571h13.6069a2.9108,2.9108,0,0,1,2.91084,2.91075v13.607A2.911,2.911,0,0,1,16.80345,19.71429Z" />
        <path className="x_com" d="M3.88141,4.06221l4.92555,6.586L3.8503,16.00278H4.9658l4.33949-4.688,3.50619,4.688h3.79619L11.40494,9.04644l4.61357-4.98423H14.903L10.90645,8.37988,7.6773,4.06221Zm1.64052.82166H7.266L14.96714,15.181h-1.744Z" />
      </g>
    </svg>
  )
};

export default styled(XLogo)(({ theme, hovered }) => ({
  '& path, & circle': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));