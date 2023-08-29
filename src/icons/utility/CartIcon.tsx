import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

export const CartIcon = ({ hovered, active, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Cart Icon'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      {...props}
    >
      <path d="M38.09174,16.58629,35.68542,6.94417a5.04823,5.04823,0,0,0-4.89679-3.81982H19.21137a5.04823,5.04823,0,0,0-4.89679,3.81982l-2.40632,9.64212H1.71084L8.324,43.05583a5.04823,5.04823,0,0,0,4.89678,3.81982H36.7792A5.04823,5.04823,0,0,0,41.676,43.05583l6.61318-26.46954ZM23.41921,33.31178v9.48475H19.98889L18.2026,33.31178ZM17.6177,30.1502l-1.78629-9.48475h7.5878V30.1502Zm8.96309,3.16158H31.7974l-1.78629,9.48475H26.58079Zm0-3.16158V20.66545h7.5878l-1.7863,9.48475Zm10.7968-9.48475h5.45374L40.46014,30.1502H35.5913ZM18.3027,7.76872a1.55209,1.55209,0,0,1,1.51866-1.27889h10.4484a1.55209,1.55209,0,0,1,1.51866,1.27889l1.89833,8.81757H16.31325ZM12.62241,20.66545,14.4087,30.1502H9.53986L7.16868,20.66545Zm-.26874,20.92968-2.02341-8.28335h4.74237l1.77049,9.48475H13.93446A1.58079,1.58079,0,0,1,12.35367,41.59513Zm25.19781,0a1.58079,1.58079,0,0,1-1.48594,1.2014H33.23592l1.77049-9.48475h4.74237Z" transform="translate(-1.71084 -3.12435)"/>
    </svg>
  )
};

export default styled(CartIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.palette.primary.contrastText,
  },
}));