import { alpha, styled } from '@mui/material';
import React from 'react';

const SplidePagination = ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={props.className + ' splide__pagination'}>
      {props.children}
    </ul>
  )
};

export default styled(SplidePagination)(({ theme }) => ({
  position: 'absolute',
  height: 'max-content',
  width: 'max-content',
  left: 'auto' + ' !important',
  top: 'auto' + ' !important',
  right: '14px' + ' !important',
  bottom: '10px' + ' !important',
  padding: `${theme.Spaces.xxs} ${theme.Spaces.sm}` + ' !important',
  paddingBottom: '5.3333px !important',
  marginBottom: '4.5px !important',
  borderRadius: '2rem',
  backgroundColor: alpha(theme.palette.background.default, 0.85),
  boxShadow: theme.shadows[4],
  opacity: 0.5,
  transition: theme.Transitions.createTransition({
    property: 'opacity',
    duration: 'short',
    easing: 'easeIn'
  }),

  '&:hover': {
    opacity: 1
  },
  
  '& .splide__pagination__page': {
    backgroundColor: alpha(theme.palette.text.secondary, 0.75),
    boxShadow: theme.shadows[6],

    '&.is-active': {
      boxShadow: theme.shadows[1],
      opacity: 0.9,
      backgroundColor: theme.palette.primary.main,
    },
  },

  [theme.breakpoints.down('md')]: {
    right: '50%' + ' !important',
    transform: 'translateX(50%)',
  },
}));