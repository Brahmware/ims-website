import React from 'react';
import { styled } from '@mui/material';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import Button from '..';

const ContainedButton: React.FC<ContainedButtonProps> = ({ children, color, flipped, ...props }) => {
  return (
    <Button variant='contained' {...props} >
      {children}
    </Button>
  )
}
export default styled(ContainedButton)(({ theme, color = 'primary', flipped = false }) => ({
  padding: `${theme.Spaces.sm} ${theme.Spaces.lg}`,
  textTransform: 'uppercase',
  fontWeight: theme.FontWeights.fontWeightLight,
  backgroundColor: !flipped ? theme.palette[color].main : theme.palette['primary'].main,
  color: !flipped ? theme.palette[color].contrastText : theme.palette['primary'].contrastText,

  '&:hover': {
    backgroundColor: !flipped ? theme.palette['primary'].main : theme.palette[color].main,
    color: !flipped ? theme.palette['primary'].contrastText : theme.palette[color].contrastText,
  }
}));