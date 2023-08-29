import React from 'react';
import { styled } from '@mui/material';
import { IconButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const IconButton = ({ children, flippedTheme, ...props }: IconButtonProps) => {
  return (
    <Button {...props} >
      {children}
    </Button>
  )
};

export default styled(IconButton)(({ theme, flippedTheme }) => ({
  padding: theme.Spaces.xs,
  minWidth: 'auto',

  '& path': {
    fill: flippedTheme ? theme.palette.primary.contrastText : theme.palette.primary.contrastText,
  },
  
  '&:hover': {
    backgroundColor: flippedTheme ? theme.palette.secondary.contrastText : theme.palette.secondary.main,
    '& path': {
      fill: flippedTheme ? theme.palette.text.primary : theme.palette.secondary.contrastText,
    },
  },
}));