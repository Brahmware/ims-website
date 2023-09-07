import { styled, alpha } from '@mui/material';
import React from 'react';

const SplideProgress = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: -1,
  backgroundColor: 'transparent' + ' !important',
}));

const Progress = styled('div')(({ theme }) => ({
  height: '100%' + ' !important',
  backgroundColor: theme.palette.background.default + ' !important',
  transition: theme.Transitions.createTransition({
    property: 'width',
    duration: 'shortest',
  }),
}));

const ProgressBar = () => {
  return (
    <SplideProgress className="splide__progress" >
      <Progress className="splide__progress__bar" />
    </SplideProgress>
  )
};

export default ProgressBar;