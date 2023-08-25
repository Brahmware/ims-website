import React from 'react';
import { NavGroupsProps } from '@interfaces/NavGropusProps';
import { Card, Typography, styled } from '@mui/material';
import Link from '@components/Link';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import Title from './Title';
import { navbar } from '@theme/constants';

const Navgroup = styled('ul')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.Spaces.xs,

  width: '18rem',
  minHeight: '12rem',

  '&:hover': {
    '& .group__card': {
      transform: `translateX(${theme.Spaces.xl})`,
    },
  },
}));

const GroupCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'longest'
  }),
  boxShadow: theme.Shadows.noshadow.boxShadow,
  borderRadius: 0,
  padding: theme.Spaces.sm,

  '& li': {
    width: '100%',
    margin: `${theme.Spaces.xxs} 0`,

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
              transform: 'scale(1)',
            },
            '30%': {
              transform: 'scale(0.75)',
            },
            '70%': {
              transform: 'scale(1)',
            },
            '85%': {
              transform: 'scale(0.75)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
        },
      },
    },
  }
}));

const Dot = styled(({ ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="red"
      {...props}
    >
      <circle cx="4" cy="4" r="4" fill="red" />
    </svg>
  )
})(({ theme }) => ({
  ...theme.Sizes.icon.extraSmall,
  marginLeft: theme.Spaces.xxs,
  marginRight: theme.Spaces.xs,

  '& circle': {
    fill: theme.palette.text.primary,
    transition: theme.Transitions.createTransition({ property: 'fill' }),
  }
}));

const NavGroups = ({ title, items }: NavGroupsProps) => {
  return (
    <Navgroup >
      <GroupCard
        className='group__card'
        elevation={navbar.elevationHigh}
      >
        <Title>
          {title}
        </Title>
        {items.map(({ title: pageName, link: href }, index) => (
          <li key={index}>
            <Link href={href} >
              <Dot />
              <Typography variant="body1" component="p">
                {pageName}
              </Typography>
            </Link>
          </li>
        ))}
      </GroupCard>
    </Navgroup>
  )
};

export default NavGroups;