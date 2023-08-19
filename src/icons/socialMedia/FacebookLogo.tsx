import { SocialMediaIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import React from 'react';

const FacebookLogo = (props: SocialMediaIconProps) => {
  return (
    <svg 
      {...svgCommonProps}
      width='20'
      height='20'
      data-name='Facebook Logo'
      viewBox='0 0 20 20'
      {...props}
    >
      <defs>
        <style>
          {`.ab530a55-7b8e-4d6a-957a-d196bf9814ae {
            fill: url(#e6036cbc-9faa-4599-a3df-a90eac83ea55);
          }`}
        </style>
        <linearGradient id="e6036cbc-9faa-4599-a3df-a90eac83ea55" x1="-956.95337" y1="133.77482" x2="-956.95337" y2="133.29375" gradientTransform="translate(38288.13477 -5301.99759) scale(40 39.7778)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#0062e0" />
          <stop offset="1" stop-color="#19afff" />
        </linearGradient>
      </defs>
      <path className="ab530a55-7b8e-4d6a-957a-d196bf9814ae" d="M8.415,19.80254v-6.984H5.93841V10.04483H8.415V7.86543A3.58924,3.58924,0,0,1,12.27844,4.002a16.198,16.198,0,0,1,2.17939.19813v2.5261H13.17c-1.18877,0-1.486.59438-1.486,1.38687v1.93174h2.62517l-.4458,2.77375H11.68408v6.984l.00051.04043A9.92283,9.92283,0,1,0,.0937,10.04483a10.0464,10.0464,0,0,0,8.321,9.81662Z" />
    </svg>

  )
}

export default FacebookLogo