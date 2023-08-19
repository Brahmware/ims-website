import { HambugerIconProps } from '@interfaces/SVGProps'
import { styled } from '@mui/material'
import svgCommonProps from '@utils/svgCommonProps'
import React from 'react'

const HamburgerIcon = ({ hovered, ...props }: HambugerIconProps) => {

  return (
    <svg
      {...svgCommonProps}
      data-name='Hambuger Icon'
      height='50'
      width='50'
      viewBox='0 0 50 50'
      {...props}
    >
      <defs>
        <style>
          {`
            line {
              fill: none;
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: 0.275rem;
            }
          `}
        </style>
      </defs>
      <line className="top-bar" x1="4.0421" y1="9.0347" x2="45.9578" y2="9.0347" />
      <line className="middle-bar" x1="4.0417" y1="25" x2="45.9574" y2="25" />
      <line className="bottom-bar" x1="4.0421" y1="40.9653" x2="45.9578" y2="40.9653" />
    </svg>
  )
};

export default styled(HamburgerIcon)(({ theme, open, hovered }) => {

  if (!open) return ({
    '& line': {
      stroke: theme.palette.text.primary,
      strokeWidth: theme.Strokes.default,
      transition: theme.Transitions.createTransition([
        { property: 'transform' },
      ]),
    },

    '& .middle-bar': {
      transform: hovered ? 'scaleX(100%)' : 'translateX(40%) scaleX(60%)',
    }
  });

  return ({
    transform: 'scale(1.125)',

    '& line': {
      stroke: theme.palette.error.main,
      strokeWidth: theme.Strokes.default,
    },

    '& .top-bar': {
      transform: 'rotate(45deg)',
      transformOrigin: '12% 36%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .bottom-bar': {
      transform: 'rotate(-45deg)',
      transformOrigin: '13% 64%',
      transition: 'all 0.1s ease-in-out',
    },

    '& .middle-bar': {
      transform: 'translateX(-100%)',
    }
  })
});
