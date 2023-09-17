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
            .x_square {
              fill: ${!mouse ? alpha(theme.palette.text.secondary, 0.8) : '#000'};
            }
          `}
        </style>
      </defs>
      <g>
        <polygon className="x_square" points="5.522 4.884 13.223 15.181 14.967 15.181 7.266 4.884 5.522 4.884" />
        <path className="x_square" d="M16.80347.28571H3.19653A2.9109,2.9109,0,0,0,.28571,3.19653V16.80347a2.9109,2.9109,0,0,0,2.91082,2.91082H16.80347a2.91105,2.91105,0,0,0,2.91082-2.91082V3.19647A2.91081,2.91081,0,0,0,16.80347.28571Zm-3.992,15.7171L9.3053,11.31476,4.96582,16.00281H3.85028L8.807,10.64819l-4.92554-6.586h3.7959l3.22912,4.31769L14.903,4.06219h1.11547L11.405,9.04645l5.2027,6.95636Z" />
      </g>
    </svg>
  )
};

export default styled(XLogo)(({ theme }) => ({
  '& path, & polygon': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));