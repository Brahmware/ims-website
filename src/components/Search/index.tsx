import { Box, Button, styled } from '@mui/material'
import Icon from '@icons/utility/SearchIcon';
import React from 'react';
import InputSearch from './InputSearch';
import IconButton from '@components/Button/IconButton';

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: `0 ${theme.Spaces.xs}`,
  justifySelf: 'end',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'end',
}));

const SearchIcon = styled(Icon)(({ theme }) => ({
  
  ...theme.Sizes.icon.small,
  '& path': {
    stroke: theme.palette.primary.contrastText,
    transition: theme.Transitions.createTransition({
      property: 'stroke',
      duration: 'shorter',
      easing: 'easeInOut'
    }),
  },
}));

const SearchIconBtn = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  marginRight: theme.Spaces.xxs,
}));

const Search = () => {
  return (
    <SearchWrapper>
      <InputSearch />
      <SearchIconBtn
        aria-label="search"
        vocab='Search in IMS'
        onClick={() => window.alert('search button was clicked')}
      >
        <SearchIcon />
      </SearchIconBtn>
    </SearchWrapper>
  )
}

export default Search;