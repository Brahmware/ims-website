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

  height: 'max-content',
  width: '100%',
  alignSelf: 'end',
  margin: theme.Spaces.xxs + ' 0',

  '@media screen and (max-width: 960px)': {
    gridColumn: '2 / 20',
    gridRow: '10 / 11',
    alignSelf: 'end',
    justifyContent: 'center',
  },
}));