import { styled } from '@mui/material';
import React from 'react';

const AliveIcon = styled('div')(({ theme }) => ({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: theme.Colors.white,
  marginLeft: theme.Spaces.sm,
  marginRight: `-${theme.Spaces.xs}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
  boxShadow: theme.shadows[4],
}));

const Flare = styled('div')(({ theme }) => ({
  width: 'inherit',
  height: 'inherit',
  borderRadius: '50%',
  backgroundColor: 'inherit',
  position: 'absolute',
  zIndex: 1,
  animation: 'radio-wave 2.5s infinite',

  '@keyframes radio-wave': {
    '0%': {
      transform: 'scale(1)',
      opacity: '1',
    },
    
    '100%': {
      transform: 'scale(3)',
      opacity: '0',
    },
  },
}));

const AliveIndicator = () => {
  return (
    <AliveIcon>
      <Flare />
      <Flare sx={{ animationDelay: '1s' }} />
    </AliveIcon>
  )
};

export default AliveIndicator;