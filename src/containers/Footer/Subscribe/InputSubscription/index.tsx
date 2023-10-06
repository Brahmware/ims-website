import React from 'react';
import { styled } from '@mui/material';

interface InputSubscriptionProps extends React.InputHTMLAttributes<HTMLInputElement> {
};

const InputSubscription: React.FC<InputSubscriptionProps> = (props) => {

  return (
    <input
      type="text"
      placeholder="Enter your Email address"
      {...props}
    />
  )
};

export default styled(InputSubscription)(({ theme }) => ({
  padding: `${theme.Spaces.sm} ${theme.Spaces.md}`,
  paddingRight: theme.Spaces.mega,
  borderRadius: '2rem',
  border: 'none',
  outline: 'none',
  backgroundColor: theme.palette.secondary.light,

  color: (
    theme.palette.mode === 'dark' ?
      theme.palette.secondary.contrastText :
      theme.palette.secondary.main
  ),

  fontSize: '0.85rem',
  lineHeight: '1em',
  fontWeight: theme.typography.fontWeightRegular,
  letterSpacing: '0.025rem',
  width: '32rem',

  '@media screen and (max-width: 1360px)': {
    width: '28rem',
  },

  '@media screen and (max-width: 510px)': {
    width: '100%',
  },
}));