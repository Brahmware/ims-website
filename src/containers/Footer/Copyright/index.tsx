import React from 'react';
import { styled } from '@mui/material';
import CopyRight, { CopyRightProps } from '@components/Copyright';

const Copyright: React.FC<CopyRightProps> = (props) => {
  return (
    <CopyRight {...props} />
  )
};

export default styled(Copyright)(({ theme }) => ({
  gridColumn: '1 / 10',
  gridRow: '20 / 21',

  height: '100%',
  width: '100%',
}));