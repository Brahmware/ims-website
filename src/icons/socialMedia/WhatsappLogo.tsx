import { SocialMediaIconProps } from '@interfaces/SVGProps'
import { styled, useTheme } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps'
import React from 'react'

const WhatsappLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      data-name='Whatsapp Logo'
      height='780.26721'
      width='776.73529'
      viewBox="0 0 780.26721 776.73529"
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...props}
    >
      <defs>
        <style>
          {`
            .cls-1 {
            fill: ${!mouse ? theme.palette.text.secondary : '#67c15e'};
            fill-rule: evenodd;
            }
          `}
        </style>
      </defs>
      <g id="Icons">
        <g id="Color-">
          <path id="Whatsapp" className="cls-1"
            d="M390.02413,10.76629c-208.16491,0-377.49186,169.37448-377.49186,377.598A374.833,374.833,0,0,0,84.434,609.68851l-47.0494,140.2921,145.13821-46.38584A374.60221,374.60221,0,0,0,390.24308,765.969c208.16491,0,377.49186-169.38073,377.49186-377.598,0-208.224-169.32695-377.59846-377.49186-377.59846h-.219ZM284.60735,202.5693c-7.32125-17.53537-12.87076-18.19989-23.96307-18.65075-3.77682-.21942-7.98577-.43837-12.65182-.43837-14.43028,0-29.51835,4.21615-38.619,13.53865-11.09231,11.32085-38.61325,37.73411-38.61325,91.90118s39.50248,106.5552,44.82633,113.88509c5.54951,7.31789,77.01236,120.08809,187.97194,166.048,86.77179,35.96094,112.51908,32.62825,132.26744,28.41162,28.84807-6.215,65.02507-27.53439,74.12573-53.27736,9.10067-25.75546,9.10067-47.73313,6.432-52.39438-2.66193-4.66124-9.9899-7.31741-21.08221-12.8746-11.09231-5.551-65.02507-32.1894-75.23391-35.742-9.98989-3.77154-19.52845-2.43674-27.06961,8.2196-10.65345,14.87345-21.0822,29.97209-29.51835,39.06891-6.65769,7.10423-17.53777,7.99393-26.63172,4.21615-12.2072-5.09962-46.37912-17.097-88.54928-54.61216-32.62585-29.07566-54.81623-65.256-61.24825-76.13226-6.43875-11.09519-.66452-17.5421,4.43366-23.53142,5.54951-6.88528,10.87336-11.76547,16.42287-18.20614,5.54856-6.43394,8.65606-9.76711,12.20721-17.31643,3.77682-7.32365,1.10817-14.873-1.55375-20.42392C315.8984,278.70828,293.708,224.54073,284.60735,202.5693Z" />
        </g>
      </g>
    </svg>
  )
}

export default styled(WhatsappLogo)(({ theme, hovered }) => ({
  '& path': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));