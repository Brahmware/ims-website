import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import React from 'react';

const ArrowMoveIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name="Arrow Move Icon"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M13.6576,40.40458H7.98276a.96039.96039,0,0,1-1.0356-.86075V11.17955a.96039.96039,0,0,1,1.0356-.86075H13.6576a.96039.96039,0,0,1,1.0356.86075V39.54383A.96039.96039,0,0,1,13.6576,40.40458ZM48.93976,25.36167,32.83049,41.47094,30.661,39.30141,43.06667,26.89576H20.49136V23.82759H43.06667L30.661,11.422l2.16953-2.16953Z" />
    </svg>
  )
};

export default ArrowMoveIcon;