import React from 'react';
import { NavGroupsProps } from '@interfaces/NavGropusProps';
import { Card, Typography, styled } from '@mui/material';
import Link from '@components/Link';
import { UtilityIconProps } from '@interfaces/SVGProps';
import svgCommonProps from '@utils/svgCommonProps';
import Title from './Title';
import { navbar } from '@theme/constants';
import { useNavHoverContext } from '@helpers/NavHoverContext';

const Navgroup = styled('ul')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.Spaces.md,
  margin: `${theme.Spaces.lg} ${theme.Spaces.lg}`,

  minWidth: '18em',
  minHeight: '12rem',

  '&:hover': {
    '& .group__card': {
      transform: `translateX(${theme.Spaces.xxs})`,
    },
  },

  [theme.breakpoints.down('lg')]: {
    minHeight: '12rem',
  },

  [theme.breakpoints.down('md')]: {
    margin: 0,
    width: '100%',
    minHeight: '12rem',
    
    '&:hover': {
      '& .group__card': {
        transform: `translateX(0)`,
      },
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
  borderRadius: `calc(${theme.Spaces.md} - 0.125rem)`,
  padding: theme.Spaces.sm,

  [theme.breakpoints.down('md')]: {
    boxShadow: theme.Shadows.noshadow.boxShadow,
    borderRadius: 0,
  },
  
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

const NavGroups = ({ title, videoUrl, items }: NavGroupsProps) => {

  const { setCurrentUrl } = useNavHoverContext();

  return (
    <Navgroup
      onMouseEnter={setCurrentUrl.bind(null, videoUrl)}
      onMouseLeave={setCurrentUrl.bind(null, '/videos/white_noise.webm')}
    >
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
              <Typography variant="body2" component="p">
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