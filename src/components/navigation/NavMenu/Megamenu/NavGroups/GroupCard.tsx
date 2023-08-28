import React from 'react';
import { CardProps } from '@interfaces/CardProps';
import { Card, styled } from '@mui/material';
import { navbar } from '@theme/constants';

const GroupCard = ({ children, ...props }: CardProps) => {
  return (
    <Card
      elevation={navbar.elevationHigh}
      {...props}
      className={props.className + ' nav__group-card'}
    >
      {children}
    </Card>
  )
};

export default styled(GroupCard)(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 0,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'longest'
  }),
  borderRadius: `calc(${theme.Spaces.md} - 0.125rem)`,
  [theme.Breakpoints.down('navGroupTablet')]: {
    borderRadius: 0,
  },
}));