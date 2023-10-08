import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowheadRightIcon: React.FC<UtilityIconProps> = ({
  hovered,
  active,
  ...props
}) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrowhead Right Icon'
      width='800'
      height='800'
      viewBox='0 0 800 800'
      {...props}
    >
      <path d="M200,94.35,239.4,50,600,400,239.4,750,200,705.65,514.9,400Z" />
    </svg>
  )
};

export default styled(ArrowheadRightIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.Colors.matmaila + ' !important',
  },
}));