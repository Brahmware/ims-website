import React from 'react';
import { styled } from '@mui/material';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: `${theme.Spaces.xs} ${theme.Spaces.lg}`,
  textTransform: 'none',
}));

const ContainedButton = ({ children, ...props }: ContainedButtonProps) => {
  return (
    <StyledButton variant='contained' {...props} >
      {children}
    </StyledButton>
  )
}
export default ContainedButton