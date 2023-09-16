import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const JoinIcon = ({ hovered, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name="Join Icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <defs>
        <style>
          {`.hy8937465hfgrt4saxsospxldhf64 {
              fill: #707070;
          }`}
        </style>
      </defs>
      <path
        className="hy8937465hfgrt4saxsospxldhf64"
        d="M10,5.19068A4.04982,4.04982,0,1,1,5.95019,9.24049,4.04981,4.04981,0,0,1,10,
        5.19068Zm4.418-1.10449h1.47266V5.55885a.73633.73633,0,1,0,1.47266,0V4.08619H18.836a.73633.73633,
        0,0,0,0-1.47266H17.3633V1.14087a.73633.73633,0,1,0-1.47266,0V2.61353H14.418a.73633.73633,0,0,0,
        0,1.47266Zm4.1934,3.76964a.73636.73636,0,0,0-.612.84253,8.19242,8.19242,0,0,1,.10022,1.27846A8.06621,
        8.06621,0,0,1,16.05246,15.353a7.336,7.336,0,0,0-2.24866-2.11461,5.50742,5.50742,0,0,1-7.6076,0A7.336,
        7.336,0,0,0,3.94752,15.353,8.095,8.095,0,0,1,10,1.8772a8.19306,8.19306,0,0,1,1.27851.10022A.73632.73632,
        0,1,0,11.50931.523L11.509.52291a9.5691,9.5691,0,0,0-7.96848,16.5117.731.731,0,0,0,.12207.10948,9.55241,
        9.55241,0,0,0,12.67523-.00027.73157.73157,0,0,0,.1212-.10872,9.549,9.549,0,0,0,3.1133-7.05828,
        9.66908,9.66908,0,0,0-.11838-1.509.7361.7361,0,0,0-.842-.6121l-.00049.00008Z"
      />
    </svg>
  )
};

export default styled(JoinIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.palette.primary.contrastText,
  },
}));