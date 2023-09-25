import React from 'react';
import { styled } from '@mui/material';
import GroupItem from './GroupItem';
import { GroupItemProps } from '@interfaces/NavGropusProps';

interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: GroupItemProps[];
};

const NavList = ({ items, ...props }: NavListProps) => {
  return (
    <ul
      {...props}
      className={props.className + ' nav__item'}
    >
      {items.map(({ title, link }, index) => (
        <GroupItem
          key={index}
          title={title}
          link={link}
        />
      ))}
    </ul>
  )
};

export default styled(NavList)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',

  '& li': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    listStyle: 'none',
    width: '100%',
    margin: `${theme.Spaces.xxs} ${theme.Spaces.sm}`,

    '&:first-of-type': {
      paddingTop: theme.Spaces.sm,
    },

    '&:last-of-type': {
      paddingBottom: theme.Spaces.sm,
    },

    '& a': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',

      '&:hover': {
        '& svg circle': {
          fill: theme.palette.text.secondary,
          transformOrigin: 'center',
          animation: `pulse 3000ms infinite`,

          '@keyframes pulse': {
            '0%': {
              fill: theme.palette.text.secondary,
            },
            '30%': {
              transform: 'scale(0.75)',
              fill: theme.palette.primary.main,
            },
            '70%': {
              transform: 'scale(1)',
              fill: theme.palette.text.secondary,
            },
            '85%': {
              transform: 'scale(0.75)',
              fill: theme.palette.primary.main,
            },
            '100%': {
              transform: 'scale(1)',
              fill: theme.palette.text.secondary,
            },
          },
        },
      },
    },
  }
}));