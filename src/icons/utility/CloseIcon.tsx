import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const CloseIcon: React.FC<UtilityIconProps> = ({
  hovered,
  active,
  ...props
}) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Close Icon'
      width='400'
      height='400'
      viewBox='0 0 400 400'
      {...props}
    >
      <path
        d="M233.20705,204.28685,400,371.08,371.06,400,204.28686,233.20734a6.06253,6.06253,0,0,0-8.574-.00024L28.92019,
        400,0,371.08,166.77392,204.28661a6.06252,6.06252,0,0,0,0-8.57322L0,28.92,28.92019,0,195.71289,166.7929a6.06254,
        6.06254,0,0,0,8.574-.00025L371.06,0,400,28.92,233.20705,195.71314A6.06254,6.06254,0,0,0,233.20705,204.28685Z"
      />
    </svg>
  )
};

export default styled(CloseIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.palette.primary.contrastText,
  },
}));