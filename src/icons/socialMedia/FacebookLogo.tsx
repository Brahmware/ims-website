import React from 'react';
import svgCommonProps from '@utils/svgCommonProps';
import { SocialMediaIconProps } from '@interfaces/SVGProps';
import { styled, useTheme, alpha } from '@mui/material';

const FacebookLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      width='20'
      height='20'
      data-name='Facebook Logo'
      viewBox='0 0 20 20'
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...props}
    >
      <defs>
        <style>
          {`.ab530a55 {
            fill: url(#ge6036cbc);
          }`}
        </style>
        <linearGradient id="ge6036cbc" x1="10" y1="19.13242" x2="10" y2="0.28178" gradientTransform="translate(0 0.1111) scale(1 0.99445)" gradientUnits="userSpaceOnUse">
          <stop
            offset="0"
            stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#0062e0"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
          />
          <stop
            offset="1"
            stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#19afff"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
          />
        </linearGradient>
      </defs>
      <path className="ab530a55" d="M16.77173.28571H3.22827A2.94257,2.94257,0,0,0,.28571,3.22827V16.77173a2.94257,2.94257,0,0,0,2.94256,2.94256H8.25476L8.2514,12.72H5.82288V10H8.2514V7.86285A3.5197,3.5197,0,0,1,12.04,4.07428a15.89109,15.89109,0,0,1,2.13714.19427V6.74573H12.91431c-1.16571,0-1.45716.58282-1.45716,1.36V10h2.57428l-.43713,2.72H11.45715l.0033,6.99426h5.31128a2.94257,2.94257,0,0,0,2.94256-2.94256V3.22827A2.94257,2.94257,0,0,0,16.77173.28571Z" />
    </svg>

  )
}

export default styled(FacebookLogo)(({ theme, hovered }) => ({
  '& path': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));