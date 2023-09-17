import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const FilmCameraIcon: React.FC<UtilityIconProps> = ({ hovered, active, ...props }) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Film Camera Icon'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      {...props}
    >
      <path className="camera-body" d="M4.77113,9.36715a.8231.8231,0,0,0-.85542.78639h0v6.69317a.8229.8229,0,0,0,.8544.78733h9.41063a.82311.82311,0,0,0,.85542-.78637V15.54509l2.28482.70111a.21831.21831,0,0,0,.27039-.12413.1823.1823,0,0,0,.011-.06266V10.94179a.20563.20563,0,0,0-.21337-.19693.2306.2306,0,0,0-.06805.01015l-2.28483.70091V10.1545a.82289.82289,0,0,0-.85439-.78732H4.77113Z" />
      <path className="right-roll" d="M13.02752,2.28471a3.77971,3.77971,0,1,0,3.77971,3.77971h0A3.77972,3.77972,0,0,0,13.02752,2.28471Zm0,1.269a.94153.94153,0,1,1-.94151.94154v0A.94151.94151,0,0,1,13.02752,3.55371ZM10.51679,6.06442a.94153.94153,0,1,1,.94154.94152h0A.94151.94151,0,0,1,10.51679,6.06442Zm2.51073,2.51079a.94153.94153,0,1,1,.94151-.94154v0a.9415.9415,0,0,1-.9415.94152ZM14.59671,7.006a.94152.94152,0,1,1,.94153-.94151.94152.94152,0,0,1-.94153.94151Z" />
      <path className="left-roll" d="M6,2.28471A3.77971,3.77971,0,1,0,9.77971,6.06442h0A3.77971,3.77971,0,0,0,6,2.28471Zm0,1.269a.94153.94153,0,1,1-.94151.94154v0h0A.94258.94258,0,0,1,6,3.55371ZM3.48934,6.06442a.94152.94152,0,1,1,.94151.94152h0A.94258.94258,0,0,1,3.48934,6.06442ZM6,8.57521a.94153.94153,0,1,1,.94153-.94152A.94152.94152,0,0,1,6,8.57521ZM7.56921,7.00593a.94151.94151,0,1,1,.94151-.94151.94151.94151,0,0,1-.94151.94151Z" />
    </svg>
  )
};

export default styled(FilmCameraIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.palette.primary.contrastText,
  },
  height: '1rem',
  width: '1rem',
  transform: 'scale(1.33)',

  '& .right-roll, & .left-roll': {
    transformOrigin: 'center',
    transformBox: 'fill-box',
    animation: 'roll 2s infinite linear',

    '@keyframes roll': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
}));