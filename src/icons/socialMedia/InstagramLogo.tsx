import { SocialMediaIconProps } from '@interfaces/SVGProps'
import { styled, useTheme, alpha } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps'
import React from 'react'

const InstagramLogo = ({ hovered, ...props }: SocialMediaIconProps) => {

  const theme = useTheme();
  const [mouse, setMouse] = React.useState(false);

  return (
    <svg
      {...svgCommonProps}
      data-name='Instagram Logo'
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
            .ea842a5b-37dd-49d5-8e15-0bb1b0e39d5c {
              fill: url(#bbc120e4-02d7-4a16-a6c7-c76bc25f3c8b);
            }

            .eddee6a4-7180-419a-b25c-2f1d4c533517 {
              fill: url(#f09d4565-3c59-4429-a4e8-a2bd9961359c);
            }
          `}
        </style>
        <radialGradient id="bbc120e4-02d7-4a16-a6c7-c76bc25f3c8b" cx="1048.60989" cy="-1078.22901" r="77.21425" gradientTransform="matrix(0.32, 0, 0, -0.32, -332.52, -325.48)" gradientUnits="userSpaceOnUse">
          <stop
            offset="0.09"
            stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#fa8f21"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
          />
          <stop
            offset="0.78"
            stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#d82d7e"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
          />
        </radialGradient>
        <radialGradient id="f09d4565-3c59-4429-a4e8-a2bd9961359c" cx="1076.62292" cy="-1080.87889" r="60.85549" gradientTransform="matrix(0.32, 0, 0, -0.32, -332.52, -325.48)" gradientUnits="userSpaceOnUse">
          <stop
            offset="0.64" stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#8c3aaa"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
            stopOpacity="0"
          />
          <stop
            offset="1"
            stopColor={!mouse ? alpha(theme.palette.text.secondary, 0.8) : "#8c3aaa"}
            style={{
              transition: theme.Transitions.createTransition({
                property: 'stop-color',
                duration: 'short'
              }),
            }}
          />
        </radialGradient>
      </defs>
      <path className="ea842a5b-37dd-49d5-8e15-0bb1b0e39d5c" d="M6.83024,10a3.1545,3.1545,0,1,1,3.15411,3.15487A3.15449,3.15449,0,0,1,6.83024,10M5.12477,10A4.85959,4.85959,0,1,0,9.98435,5.14041,4.85948,4.85948,0,0,0,5.12477,10m8.77588-5.05226a1.13567,1.13567,0,1,0,1.13612-1.13521h-.00045a1.1362,1.1362,0,0,0-1.13567,1.13521M6.161,17.70335a5.23033,5.23033,0,0,1-1.75747-.32556A2.94142,2.94142,0,0,1,3.3149,16.6699,2.91992,2.91992,0,0,1,2.607,15.58208a5.22563,5.22563,0,0,1-.32556-1.75748c-.04588-.99756-.055-1.29723-.055-3.82453s.00992-2.82614.055-3.82454A5.2651,5.2651,0,0,1,2.607,4.41805,2.9413,2.9413,0,0,1,3.3149,3.32948a2.91675,2.91675,0,0,1,1.08858-.7079A5.22557,5.22557,0,0,1,6.161,2.296c.99757-.04588,1.29723-.05505,3.8234-.05505s2.82614.00992,3.82454.05505a5.26543,5.26543,0,0,1,1.75748.32555,2.93191,2.93191,0,0,1,1.08857.7079,2.93212,2.93212,0,0,1,.7079,1.08857,5.2257,5.2257,0,0,1,.32555,1.75748c.04589.9984.05505,1.29723.05505,3.82454s-.00916,2.82613-.05505,3.82453a5.25026,5.25026,0,0,1-.32555,1.75748,3.13352,3.13352,0,0,1-1.79647,1.79571,5.22563,5.22563,0,0,1-1.75748.32556c-.99757.04588-1.29723.055-3.82454.055s-2.82613-.00916-3.8234-.055M6.08259.59344A6.93937,6.93937,0,0,0,3.78545,1.033,4.64177,4.64177,0,0,0,2.109,2.12462a4.624,4.624,0,0,0-1.0916,1.67646A6.94144,6.94144,0,0,0,.5778,6.09823C.53117,7.1073.52049,7.42991.52049,10s.01068,2.89269.05731,3.90176a6.94106,6.94106,0,0,0,.43958,2.29715A4.62622,4.62622,0,0,0,2.109,17.87536,4.65332,4.65332,0,0,0,3.78545,18.967a6.94579,6.94579,0,0,0,2.29714.43957c1.00961.04588,1.33168.05732,3.90176.05732s2.89269-.01068,3.90177-.05732a6.941,6.941,0,0,0,2.29714-.43958,4.8386,4.8386,0,0,0,2.76807-2.76806,6.92252,6.92252,0,0,0,.43958-2.29715c.04588-1.00983.05655-1.33168.05655-3.90176s-.01067-2.89269-.05655-3.90176a6.93951,6.93951,0,0,0-.43958-2.29715,4.65412,4.65412,0,0,0-1.0916-1.67646A4.63083,4.63083,0,0,0,16.184,1.033,6.93022,6.93022,0,0,0,13.88687.59344C12.8778.54756,12.55519.53613,9.98511.53613S7.0922.5468,6.08259.59344" />
      <path className="eddee6a4-7180-419a-b25c-2f1d4c533517" d="M6.83024,10a3.1545,3.1545,0,1,1,3.15411,3.15487A3.15449,3.15449,0,0,1,6.83024,10M5.12477,10A4.85959,4.85959,0,1,0,9.98435,5.14041,4.85948,4.85948,0,0,0,5.12477,10m8.77588-5.05226a1.13567,1.13567,0,1,0,1.13612-1.13521h-.00045a1.1362,1.1362,0,0,0-1.13567,1.13521M6.161,17.70335a5.23033,5.23033,0,0,1-1.75747-.32556A2.94142,2.94142,0,0,1,3.3149,16.6699,2.91992,2.91992,0,0,1,2.607,15.58208a5.22563,5.22563,0,0,1-.32556-1.75748c-.04588-.99756-.055-1.29723-.055-3.82453s.00992-2.82614.055-3.82454A5.2651,5.2651,0,0,1,2.607,4.41805,2.9413,2.9413,0,0,1,3.3149,3.32948a2.91675,2.91675,0,0,1,1.08858-.7079A5.22557,5.22557,0,0,1,6.161,2.296c.99757-.04588,1.29723-.05505,3.8234-.05505s2.82614.00992,3.82454.05505a5.26543,5.26543,0,0,1,1.75748.32555,2.93191,2.93191,0,0,1,1.08857.7079,2.93212,2.93212,0,0,1,.7079,1.08857,5.2257,5.2257,0,0,1,.32555,1.75748c.04589.9984.05505,1.29723.05505,3.82454s-.00916,2.82613-.05505,3.82453a5.25026,5.25026,0,0,1-.32555,1.75748,3.13352,3.13352,0,0,1-1.79647,1.79571,5.22563,5.22563,0,0,1-1.75748.32556c-.99757.04588-1.29723.055-3.82454.055s-2.82613-.00916-3.8234-.055M6.08259.59344A6.93937,6.93937,0,0,0,3.78545,1.033,4.64177,4.64177,0,0,0,2.109,2.12462a4.624,4.624,0,0,0-1.0916,1.67646A6.94144,6.94144,0,0,0,.5778,6.09823C.53117,7.1073.52049,7.42991.52049,10s.01068,2.89269.05731,3.90176a6.94106,6.94106,0,0,0,.43958,2.29715A4.62622,4.62622,0,0,0,2.109,17.87536,4.65332,4.65332,0,0,0,3.78545,18.967a6.94579,6.94579,0,0,0,2.29714.43957c1.00961.04588,1.33168.05732,3.90176.05732s2.89269-.01068,3.90177-.05732a6.941,6.941,0,0,0,2.29714-.43958,4.8386,4.8386,0,0,0,2.76807-2.76806,6.92252,6.92252,0,0,0,.43958-2.29715c.04588-1.00983.05655-1.33168.05655-3.90176s-.01067-2.89269-.05655-3.90176a6.93951,6.93951,0,0,0-.43958-2.29715,4.65412,4.65412,0,0,0-1.0916-1.67646A4.63083,4.63083,0,0,0,16.184,1.033,6.93022,6.93022,0,0,0,13.88687.59344C12.8778.54756,12.55519.53613,9.98511.53613S7.0922.5468,6.08259.59344" />
    </svg>
  )
}

export default styled(InstagramLogo)(({ theme, hovered }) => ({
  '& path': {
    transition: theme.Transitions.createTransition([
      {
        property: 'fill',
        duration: 'short'
      }
    ])
  }
}));