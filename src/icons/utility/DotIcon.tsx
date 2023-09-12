import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import { styled } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps';

const DotIcon = ({ ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="red"
      {...props}
    >
      <circle cx="4" cy="4" r="4" fill="red" />
    </svg>
  )
};

export default styled(DotIcon)(({ theme }) => ({
  ...theme.Sizes.icon.extraSmall,
  marginLeft: theme.Spaces.xxs,
  marginRight: `calc(${theme.Spaces.sm} + ${theme.Spaces.xxs})`,

  '& circle': {
    fill: theme.palette.text.secondary,
    transition: theme.Transitions.createTransition({ property: 'fill' }),
  }
}));