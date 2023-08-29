import React from 'react';
import { styled } from '@mui/material';
import { IconButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <Button {...props} >
      {children}
    </Button>
  )
};

export default styled(IconButton)(({ theme }) => ({
  padding: theme.Spaces.xs,
  minWidth: 'auto',
}));