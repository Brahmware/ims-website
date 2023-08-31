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
      width='20'
      viewBox='0 0 20 20'
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      {...props}
    >
      <defs>
        <style>
          {`
            .b708bb15-0c44-4be1-aa70-cae10dda9a4e {
              fill: ${!mouse ? alpha(theme.palette.text.secondary, 0.8) : '#ce1312'};
              fill-rule: evenodd;
            }
          `}
        </style>
      </defs>
      <g id="b455d66a-ff5a-4361-826e-55dc3ce83f22" data-name="Icons">
        <g id="a25a9e1c-d97f-48d3-9fba-3659746d5a18" data-name="Color-">
          <path id="f4744a42-7df4-403f-8675-a7ab8b0f37c9"
            data-name="Linkedin"
            className="b708bb15-0c44-4be1-aa70-cae10dda9a4e" d="M7.935,12.61247,7.93437,6.95323l5.40376,2.83938ZM19.8,5.97257a4.37873,4.37873,0,0,0-.795-1.99908,2.84608,2.84608,0,0,0-2.00375-.85289c-2.79875-.20393-6.99688-.20393-6.99688-.20393H9.99563s-4.19813,0-6.99688.20393a2.84725,2.84725,0,0,0-2.00437.85289A4.37512,4.37512,0,0,0,.2,5.97257,30.68294,30.68294,0,0,0,0,9.23241v1.52827a30.6672,30.6672,0,0,0,.2,3.25983,4.37512,4.37512,0,0,0,.79438,1.99908A3.37553,3.37553,0,0,0,3.2,16.88066c1.6.15484,6.8.20267,6.8.20267s4.2025-.00629,7.00125-.21022a2.85043,2.85043,0,0,0,2.00375-.85352,4.37873,4.37873,0,0,0,.795-1.99908,30.6672,30.6672,0,0,0,.2-3.25983V9.23241a30.68294,30.68294,0,0,0-.2-3.25984Z" />
        </g>
      </g>
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