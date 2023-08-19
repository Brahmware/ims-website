import { UtilityIconProps } from '@interfaces/SVGProps'
import svgCommonProps from '@utils/svgCommonProps'
import React from 'react'

const EmailIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name="Email Icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <style>
          {`.hy8937465hfgrt4739sospxldhf64 {
              fill: #707070;
          }`}
        </style>
      </defs>
      <path className="hy8937465hfgrt4739sospxldhf64" d="M7.99973,1.03a6.97,6.97,0,0,0,0,13.94.87125.87125,0,1,0,0-1.74249A5.22749,5.22749,0,1,1,13.22722,8v2.61374a.87125.87125,0,1,1-1.7425,0V8a3.485,3.485,0,1,0-3.485,3.485,3.44675,3.44675,0,0,0,1.77951-.50508,2.60773,2.60773,0,0,0,5.19047-.36617V8A6.97686,6.97686,0,0,0,7.99973,1.03Zm0,8.71248A1.7425,1.7425,0,1,1,9.74223,8,1.7425,1.7425,0,0,1,7.99973,9.7425Z" />
    </svg>

  )
}

export default EmailIcon