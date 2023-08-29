import { UtilityIconProps } from '@interfaces/SVGProps';
import { styled } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps';
import React from 'react';

const SearchIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Search Icon'
      width='800'
      height='800'
      fill='none'
      viewBox='0 0 800 800'
      {...props}
    >
      <defs>
        {`
          .search__icon-path {
            fill: #323232;
          }
        `}
      </defs>
      <path className="search__icon-path" d="M725.45605,674.54492,604.64087,553.72974A302.6814,302.6814,0,0,0,152.64893,152.64893,302.68342,302.68342,0,0,0,553.72974,604.64087L674.54492,725.45605ZM366.6665,597.333c-127.18994,0-230.666-103.47656-230.666-230.66651s103.47607-230.666,230.666-230.666S597.333,239.47656,597.333,366.6665,493.85645,597.333,366.6665,597.333Z" transform="translate(-64.00049 -64.00049)"/>
    </svg>
  )
};

export default styled(SearchIcon)(({ theme }) => ({
  transform: 'translate(2px, 1.33px)',
  '& path': {
    stroke: theme.palette.text.primary,
    strokeWidth: theme.Strokes.thin,
  },
}));