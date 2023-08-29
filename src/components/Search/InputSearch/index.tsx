import { styled } from '@mui/material';
import React from 'react'

const StyledInput = styled('input')(({ theme }) => ({
  padding: `${theme.Spaces.sm} ${theme.Spaces.md}`,
  paddingRight: theme.Spaces.xxl,
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
  width: '20rem',
  transition: theme.Transitions.createTransition({ property: 'width' }),

  '&:focus': {
    width: '33rem',
  },
}));

const InputSearch = () => {
  return (
    <StyledInput type="text" placeholder="Search in IMS" />
  )
}

export default InputSearch