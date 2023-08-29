import React from 'react';
import { styled } from '@mui/material';
import { TextButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const TextButton = ({ children, ...props }: TextButtonProps) => {
  return (
    <Button
      variant='text'
      {...props}
    >
      {children}
    </Button>
  )
};

export default styled(TextButton)(({ theme }) => ({
  padding: `${theme.Spaces.xs} ${theme.Spaces.lg}`,
  textTransform: 'none',
}));