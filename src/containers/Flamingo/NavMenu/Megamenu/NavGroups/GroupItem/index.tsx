import React from 'react';
import Link from '@components/Link';
import DotIcon from '@icons/utility/DotIcon';
import { GroupItemProps } from '@interfaces/NavGropusProps';

const GroupItem = ({ index, ...props }: GroupItemProps) => {
  return (
    <li key={index}>
      <Link href={props.link} >
        <DotIcon />
        {props.title}
      </Link>
    </li>
  )
};

export default GroupItem;