import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import { ButtonProps } from '@interfaces/ButtonProps';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  transition: theme.Transitions.createTransition([
    {
      property: 'background-color',
      duration: 'shorter',
      easing: 'easeInOut'
    },
    {
      property: 'color',
      duration: 'shorter',
      easing: 'easeInOut'
    }
  ]),

  '& svg path': {
    stroke: theme.palette.primary.contrastText,
    transition: theme.Transitions.createTransition([
      {
        property: 'stroke',
        duration: 'shorter',
        easing: 'easeInOut'
      },
      {
        property: 'fill',
        duration: 'shorter',
        easing: 'easeInOut'
      }
    ]),
  },

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& svg path': {
      stroke: theme.palette.secondary.contrastText,
    },
  },
}));

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton
      disableElevation
      aria-label='button with icon and label'
      vocab='button with icon and label'
      {...props}
    >
      {children}
    </StyledButton>
  )
}
export default Button;