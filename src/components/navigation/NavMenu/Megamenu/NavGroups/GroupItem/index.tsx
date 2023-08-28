import React from 'react';
import Link from '@components/Link';
import DotIcon from '@icons/utility/DotIcon';
import { GroupItemProps } from '@interfaces/NavGropusProps';
import { Typography } from '@mui/material';

const GroupItem = ({ index, ...props}: GroupItemProps) => {
  return (
    <li key={index}>
      <Link href={props.link} >
        <DotIcon />
        <Typography variant="body2" component="p">
          {props.title}
        </Typography>
      </Link>
    </li>
  )
};

export default GroupItem;