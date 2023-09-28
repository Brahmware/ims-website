import React from 'react';
import CopyRight, { CopyRightProps } from '@components/Copyright';
import { alpha, styled } from '@mui/material';

const Copyright: React.FC<CopyRightProps> = (props) => {

  return (
    <CopyRight {...props} />
  )
};

export default styled(Copyright) (({ theme }) => ({
  gridColumn: '1 / 21',
  gridRow: '25 / 26',
  height: '100%',
  width: '100%',
  zIndex: theme.Shadows.medium.zIndex,

  '& *': {
    textShadow: `${alpha(theme.Colors.black, 0.25)} 1px 0 10px`,
  },
}));