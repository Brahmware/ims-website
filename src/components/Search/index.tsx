import { Box, Button, styled } from '@mui/material'
import Icon from '@icons/utility/SearchIcon';
import React from 'react';
import InputSearch from './InputSearch';
import IconButton from '@components/Button/IconButton';

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: `0 ${theme.Spaces.xs}`,
  justifySelf: 'end',
}));

const SearchIcon = styled(Icon)(({ theme }) => ({
  
  ...theme.Sizes.icon.default,
  '& path': {
    stroke: theme.palette.primary.contrastText,
    transition: theme.Transitions.createTransition({
      property: 'stroke',
      duration: 'shorter',
      easing: 'easeInOut'
    }),
  },
}));

const Search = () => {
  return (
    <SearchWrapper>
      <InputSearch />
      <IconButton
        aria-label="search"
        vocab='Search in IMS'
        onClick={() => window.alert('search button was clicked')}
      >
        <SearchIcon />
      </IconButton>
    </SearchWrapper>
  )
}

export default Search;