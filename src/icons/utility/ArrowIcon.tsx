import { UtilityIconProps } from '@interfaces/SVGProps'
import svgCommonProps from '@utils/svgCommonProps'
import React from 'react'

const ArrowIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name="Arrow Icon"
      width="648"
      height="648"
      viewBox="0 0 648 648"
      {...props}
    >
      <style>
        {`
          .strokes{
            fill:#00f;
            transform-origin: center;
          };
        `}
      </style>
      <polygon
        className="strokes"
        data-name="arrow"
        points="463,185 181.6,188.1 181.3,216.8 414.9,214.2 175.5,453.6 195.6,473.7 433.7,235.6  431.2,466.7 459.9,466.4 "
      />
      <path
        className="strokes"
        data-name="circle"
        d="M322.9,26.6c40.3,0,79.4,7.9,116.2,23.4c35.5,15,67.5,36.6,94.9,64c27.4,27.4,48.9,59.3,64,94.9 c15.6,36.8,23.4,75.9,23.4,116.2s-7.9,79.4-23.4,116.2c-15,35.5-36.6,67.5-64,94.9c-27.4,27.4-59.3,48.9-94.9,64 c-36.8,15.6-75.9,23.4-116.2,23.4s-79.4-7.9-116.2-23.4c-35.5-15-67.5-36.6-94.9-64c-27.4-27.4-48.9-59.3-64-94.9 c-15.6-36.8-23.4-75.9-23.4-116.2s7.9-79.4,23.4-116.2c15-35.5,36.6-67.5,64-94.9c27.4-27.4,59.3-48.9,94.9-64 C243.5,34.5,282.6,26.6,322.9,26.6 M322.9,0.6C143.7,0.6-1.6,145.9-1.6,325.1s145.3,324.4,324.4,324.4s324.4-145.3,324.4-324.4 S502.1,0.6,322.9,0.6L322.9,0.6z"
      />
    </svg>
  )
}

export default ArrowIcon