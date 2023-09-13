import React from 'react';
import svgCommonProps from '@utils/svgCommonProps';
import { SocialMediaIconProps } from '@interfaces/SVGProps';
import { styled, useTheme, alpha } from '@mui/material';

const YoutubeLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      data-name='Youtube Logo'
      height='20'
      width='28'
      viewBox='0 0 28 20'
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...props}
    >
      <defs>
        <style>
          {`
            .b708bb15 {
              fill: ${!mouse ? alpha(theme.palette.text.secondary, 0.8) : '#ce1312'};
              fill-rule: evenodd;
            }
          `}
        </style>
      </defs>
      <path className="b708bb15" d="M11.36681,13.33127,11.366,6.11489l6.8906,3.62064ZM26.49647,4.86441a5.58369,5.58369,0,0,0-1.01375-2.54914,3.62915,3.62915,0,0,0-2.55509-1.08755c-3.56882-.26-8.92207-.26-8.92207-.26h-.01112s-5.35327,0-8.92213.26A3.63072,3.63072,0,0,0,2.51646,2.31527,5.57913,5.57913,0,0,0,1.50351,4.86441a39.12276,39.12276,0,0,0-.255,4.15678V10.97a39.10431,39.10431,0,0,0,.255,4.15678,5.579,5.579,0,0,0,1.013,2.54913A4.30444,4.30444,0,0,0,5.329,18.77386c2.04024.19744,8.671.25843,8.671.25843s5.35883-.008,8.92769-.26807a3.63466,3.63466,0,0,0,2.55508-1.08836,5.58346,5.58346,0,0,0,1.01375-2.54912,39.10465,39.10465,0,0,0,.255-4.15679V9.02119a39.12276,39.12276,0,0,0-.255-4.15678Z" />
    </svg>
  )
};

export default styled(YoutubeLogo)(({ theme, hovered }) => ({
  '& path': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));