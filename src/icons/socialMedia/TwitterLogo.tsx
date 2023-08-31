import React from 'react';
import svgCommonProps from '@utils/svgCommonProps';
import { SocialMediaIconProps } from '@interfaces/SVGProps';
import { styled, useTheme, alpha } from '@mui/material';

const TwitterLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      data-name='Twitter Logo'
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
            .b0437c38-6e11-436e-916b-388b13760f3a {
              fill: ${!mouse ? alpha(theme.palette.text.secondary, 0.8) : '#00aaec'};
              fill-rule: evenodd;
            }
          `}
        </style>
      </defs>
      <path id="aed5849e-bcbb-4c93-bd2c-ad0a122fc35a" data-name="Twitter"
        className="b0437c38-6e11-436e-916b-388b13760f3a"
        d="M19.90363,3.701a7.93734,7.93734,0,0,1-2.33334.65571A4.15776,4.15776,0,0,0,19.3572,2.05218,8.00365,8.00365,0,0,1,16.77507,3.062a4.00756,4.00756,0,0,0-2.96581-1.315A4.11613,4.11613,0,0,0,9.74713,5.91372a4.25115,4.25115,0,0,0,.10464.949A11.44084,11.44084,0,0,1,1.47522,2.50759,4.24271,4.24271,0,0,0,.9253,4.60468,4.19439,4.19439,0,0,0,2.73316,8.0728,3.9898,3.9898,0,0,1,.89159,7.553v.05126a4.14278,4.14278,0,0,0,3.2611,4.08568,3.8749,3.8749,0,0,1-1.07075.14664,3.9473,3.9473,0,0,1-.765-.07392A4.07918,4.07918,0,0,0,6.11283,14.655,8.024,8.024,0,0,1,1.066,16.43967a8.13284,8.13284,0,0,1-.96961-.05723A11.31409,11.31409,0,0,0,6.32559,18.253c7.47554,0,11.56208-6.34847,11.56208-11.85526,0-.18121-.00349-.36243-.01047-.54007A8.34026,8.34026,0,0,0,19.90363,3.701" />
    </svg>
  )
};

export default styled(TwitterLogo)(({ theme, hovered }) => ({
  '& path': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));