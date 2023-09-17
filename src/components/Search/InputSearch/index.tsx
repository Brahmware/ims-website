import { styled, useMediaQuery, useTheme } from '@mui/material';
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

  [theme.Breakpoints.down('md')]: {
    width: '15rem',
  },

  '@media (max-width: 610px)': {
    width: '12rem',
  },

  '@media (max-width: 562px)': {
    padding: theme.Spaces.sm,
    width: '6.125rem',
  },

  '@media (max-width: 397px)': {
    display: 'none',
  }
}));

const InputSearch = () => {

  const medium = useTheme().breakpoints.down('md');
  const showContractedText = useMediaQuery(medium);

  return (
    <StyledInput
      type="text"
      placeholder={`Search in ${showContractedText ? 'IMS' : 'Indian Media Syndicate'} `}
    />
  )
}

export default InputSearch