import React from 'react';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import ContainedButton from '@components/Button/ContainedButton';
import { styled } from '@mui/material';

interface ButtonSubscriptionProps extends ContainedButtonProps {
  children?: React.ReactNode;
};

const ButtonSubscription: React.FC<ButtonSubscriptionProps> = (props) => {
  return (
    <ContainedButton
      aria-label="subscribe"
      vocab='Subscribe to IMS'
      onClick={() => window.alert('subscribe button was clicked')}
      {...props}
    >
      Subscribe
    </ContainedButton>
  )
};

export default styled(ButtonSubscription)(({ theme }) => ({
  position: 'absolute',
  marginRight: '0.285rem',
  padding: `0.35rem ${theme.Spaces.lg}`,

  '&:hover': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },

}));