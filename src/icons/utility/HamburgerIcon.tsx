import { UtilityIconProps } from '@interfaces/SVGProps'
import React from 'react'

const HamburgerIcon = (props: UtilityIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-name='Hambuger Icon'
      height='50'
      width='50'
      viewBox='0 0 50 50'
      {...props}
    >
      <defs>
        <style>
          {`
            line {fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}
          `}
        </style>
      </defs>
      <line className="top-bar" x1="4.0421" y1="9.0347" x2="45.9578" y2="9.0347" />
      <line className="middle-bar" x1="4.0417" y1="25" x2="45.9574" y2="25" />
      <line className="bottom-bar" x1="4.0421" y1="40.9653" x2="45.9578" y2="40.9653" />
    </svg>
  )
}

export default HamburgerIcon