import IconButton from '@components/Button/IconButton';
import ArrowMoveIcon from '@icons/utility/ArrowMoveIcon';
import { alpha, styled } from '@mui/material';
import React from 'react';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  
  [theme.breakpoints.down('md')]: {
    display: 'none' + ' !important',
  },
}));

const StyledMoveIcon = styled(ArrowMoveIcon)(({ theme }) => ({
  height: '1.25rem' + ' !important',
  width: '1.25rem' + ' !important',
}));

const SplideButtons = () => {
  return (
    <div className="splide__arrows">
      <StyledIconButton className="splide__arrow splide__arrow--prev">
        <StyledMoveIcon />
      </StyledIconButton>
      <StyledIconButton className="splide__arrow splide__arrow--next">
        <StyledMoveIcon />
      </StyledIconButton>
    </div>
  )
};

export default SplideButtons;