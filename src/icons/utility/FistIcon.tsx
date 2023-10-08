import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import { styled } from '@mui/material';

const FistIcon: React.FC<UtilityIconProps> = ({ hovered, active, ...props }) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Cart Icon'
      width='400'
      height='400'
      viewBox='0 0 400 400'
      {...props}
    >
      <path
        d="M318.09108,196.09479c-1.16157-7.27307-18.624-28.16638-22.34577-26.74616-.78876.30316-49.027,53.31208-49.58685,54.48651-1.2768,2.68744,9.538,15.66864,16.33069,19.60151v.00268a11.05852,11.05852,0,0,0,2.95892,1.311c.37549-.00275,11.54047-9.74476,24.81061-21.65259C321.59211,194.975,318.40516,198.06122,318.09108,196.09479Z" />
      <path
        d="M267.26979,400V321.7934l18.41534-37.19556c10.12848-20.45636,18.85016-38.50928,19.38-40.09332a53.80325,53.80325,0,0,0,1.60589-6.86341c.78931-4.80682,1.43109-21.05993.84393-21.05993-.22668.02734-9.51263,9.46893-20.63549,20.9862s-20.48859,20.89331-20.8136,21.16645c-.32447.12561-8.20709-3.69526-17.51709-8.48847s-17.132-8.808-17.37775-8.808c-.24939-.04914-2.83581,12.51416-5.792,28.13635-3.92822,20.75409-5.42218,27.86871-5.668,26.85822-8.34833-34.926-20.27991-58.08344-39.33405-76.34394a107.791,107.791,0,0,0-28.51159-19.79272c-3.75592-1.87628-6.82874-3.433-6.82874-3.70618,0-.39325,10.71131-21.02441,10.90253-21.02441.083,0,1.55591.6828,3.2738,1.52948a51.19037,51.19037,0,0,0,22.66913,5.73816c9.33862.0191,16.22034-2.70661,22.34247-8.84894,3.94873-3.96289,6.04266-7.37683,7.30444-11.91876.94226-3.39209.62275-5.77912-.91217-6.78968-1.7351-1.13885-71.11407-34.25134-73.35363-35.01611-2.77509-.92859-4.18927-.84662-6.33869.355-1.59936.90131-4.50067,5.15643-23.81488,34.93146-12.09625,18.64831-22.74939,35.43677-23.67255,37.32123-2.17126,4.41357-2.33239,8.11425-.50524,11.62652.64563,1.24268,17.064,25.02558,36.48522,52.85327L154.72847,307.941l-6.77192,45.2334c-3.72448,24.87811-6.93345,46.6621-6.9384,47.09906Zm-34.59913-70.82428c-5.13293,3.6734-9.59313,6.92346-9.91,7.25122-.32745.325-2.44464,11.59918-4.889,26.04157h.001c-2.3706,14.00805-4.37256,25.77118-4.45447,26.1535-.26764,1.2727-.74286-6.99719-1.72882-30.04541l-.98321-22.99085-9.6175-9.69555-9.61749-9.69562,3.86951,1.666a90.632,90.632,0,0,0,16.955,5.72455c7.4082,1.55677,17.07623,1.28363,28.114-.79205C241.66383,322.55542,240.01527,323.91553,232.67066,329.17572Z" />
      <path
        d="M163.70167,124.74341c10.26556,4.87237,18.90094,8.87628,19.18774,8.90082.61969.04644,24.74286-39.70826,24.74286-40.77338,0-3.20367-7.98645-9.43884-18.89245-14.74823-9.50061-4.632-18.30145-6.95349-20.37989-5.36945-1.12469.85486-24.08685,42.37934-23.66625,42.789C144.8824,115.73059,153.4358,119.871,163.70167,124.74341Z" />
      <path
        d="M213.23878,193.604c-.96246,2.50721,13.16827,16.78022,23.0542,23.28577l.00006-.00269c1.9599,1.28364,3.38007,1.82984,4.15027,1.82984.90454-.101,7.15179-6.76233,27.42816-29.24793,28.68366-31.807,27.20148-29.83508,25.28418-33.60955-4.85461-9.56452-25.17279-27.63929-31.07123-27.63929-.948,0-4.64081,4.81232-24.86114,32.3833C224.16175,178.416,213.37538,193.27625,213.23878,193.604Z" />
      <path
        d="M189.98579,137.09369c.06634.04645,5.42432,2.83221,11.90674,6.19153,6.48236,3.35656,12.34094,6.64215,13.021,7.325,2.33759,2.3078,2.91114,4.22235,3.10236,10.15991A63.78544,63.78544,0,0,1,215.536,178.752l.009-.04913c-.16388.62817-.2185.90124-.082.90124.89832-.90673,40.59729-59.02569,40.76111-59.68115,1.09223-4.17865-16.37567-18.04474-30.4668-24.18707-3.41644-1.47485-4.809-1.85718-7.1715-1.88452h-2.93244l-12.894,21.57886C195.66737,127.29706,189.93116,137.09369,189.98579,137.09369Z" />
    </svg>
  )
};

export default styled(FistIcon)(({ theme }) => ({
  '& path': {
    strokeWidth: 0,
    fill: theme.palette.primary.contrastText,
  },
}));