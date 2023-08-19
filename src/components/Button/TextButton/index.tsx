import React from 'react';
import { styled } from '@mui/material';
import { TextButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: `${theme.Spaces.xs} ${theme.Spaces.lg}`,
  textTransform: 'none',
}));

const TextButton = ({ children, ...props }: TextButtonProps) => {
  return (
    <StyledButton
      variant='text'
      {...props}
    >
      {children}
    </StyledButton>
  )
}
export default TextButton;