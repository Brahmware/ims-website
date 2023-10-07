import React from 'react';
import IconButton from '@components/Button/IconButton';
import { IconButtonProps } from '@interfaces/ButtonProps';
import { styled } from '@mui/material';
import FistIcon from '@icons/utility/FistIcon';

const StyledVideo = styled('video')(({ theme }) => ({
  width: '103%',
  height: '103%',
  objectFit: 'cover',
  background: 'transparent',
}));

const StyledFistIcon = styled(FistIcon)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

interface WorldButtonProps extends IconButtonProps {
  isDonationPanelOpen: boolean;
};

const WorldButton: React.FC<WorldButtonProps> = ({ isDonationPanelOpen, ...props }) => {
  return (
    <IconButton
      {...props}
    >
      <StyledFistIcon />
      <StyledVideo
        autoPlay
        muted
        loop
      >
        <source src={'/videos/paankouri/world.webm'} type="video/webm" />
      </StyledVideo>
    </IconButton>
  )
};

export default styled(WorldButton)(({ theme, isDonationPanelOpen = false }) => ({
  position: 'fixed',
  bottom: theme.Spaces.hecto,
  right:
    !isDonationPanelOpen ?
      `calc(${theme.Spaces.xl} - ${theme.Spaces.xxs})` :
      `calc(${theme.Spaces.xl} + ${theme.Widths.donationPanel.width} - ${theme.Spaces.xxs})`
  ,
  zIndex: theme.Shadows.low.zIndex - 2,
  boxShadow: theme.shadows[5],
  transition: theme.Transitions.createTransition(
    [
      {
        property: 'box-shadow',
        duration: 'short',
        easing: 'easeIn'
      },
      {
        property: 'right',
        duration: 'short',
        easing: 'easeIn'
      }
    ]
  ),

  '&:hover': {
    boxShadow: theme.shadows[3],
  },

  height: '5rem',
  width: '5rem',
  borderRadius: '50%',
  overflow: 'hidden',
  padding: 0,
}));