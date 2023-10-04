import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const NoImageIcon = ({ hovered, active, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='No Image Icon'
      width='800'
      height='800'
      viewBox='0 0 800 800'
      {...props}
    >
      <path
        d="M750,85.3525,714.64748,50,50,714.64748,85.3525,750l50-50H650a50.06752,50.06752,
        0,0,0,50-50V135.3525ZM650,650H185.3525L380.175,455.175l59.47,59.4675a50,50,0,0,0,
        70.71,0L550,475l100,99.93248Zm0-145.795L585.355,439.5575a50,50,0,0,0-70.71,0L475,
        479.205l-59.425-59.4275L650,185.3525Z" 
      />
      <path
        d="M150,550V475L275,350.085l34.33249,34.33249,35.39751-35.4-34.375-34.375a50,
        50,0,0,0-70.71,0L150,404.29V150H550V100H150a50.05,50.05,0,0,0-50,50V550Z" 
      />
    </svg>
  )
};

export default styled(NoImageIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.Colors.slogan,
  },
}));