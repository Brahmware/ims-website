import { Box, BoxProps, Button, styled } from '@mui/material'
import Icon from '@icons/utility/SearchIcon';
import React from 'react';
import InputSearch from './InputSearch';
import IconButton from '@components/Button/IconButton';

const SearchWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  margin: `0 ${theme.Spaces.xs}`,
  justifySelf: 'end',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'end',

  '@media (max-width: 562px)': {
    margin: `0 ${theme.Spaces.xs}`,
  },

  '@media (max-width: 438px)': {
    margin: `0 ${theme.Spaces.xxs}`,
  },
}));

const SearchIcon = styled(Icon)(({ theme }) => ({
  ...theme.Sizes.icon.small,
}));

const SearchIconBtn = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  marginRight: theme.Spaces.xxs,

  '@media (max-width: 438px)': {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,

      '& svg': {
        '& path': {
          fill: theme.palette.secondary.contrastText,
        },
      },
    },
  },
}));

const Search = () => {
  return (
    <SearchWrapper>
      <InputSearch />
      <SearchIconBtn
        flippedTheme
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