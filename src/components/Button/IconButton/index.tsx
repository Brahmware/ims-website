import React from 'react';
import { styled } from '@mui/material';
import { IconButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.Spaces.xs,
  minWidth: 'auto',
}));

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <StyledButton {...props} >
      {children}
    </StyledButton>
  )
}
export default IconButton