import React from 'react';
import IconButton from '@components/Button/IconButton';
import { IconButtonProps } from '@interfaces/ButtonProps';
import { styled } from '@mui/material';
import FistIcon from '@icons/utility/FistIcon';
import ArrowheadRightIcon from '@icons/utility/ArrowheadRightIcon';

const StyledArrowheadRightIcon = styled(ArrowheadRightIcon)(({ theme }) => ({
  width: '100%',
  height: '100%',
  transform: 'translateX(0.125rem)',
  margin: theme.Spaces.md,
}));

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
      flippedTheme
    >
      {
        isDonationPanelOpen ?
          (
            <StyledArrowheadRightIcon />
          ) : (
            <React.Fragment>
              <StyledFistIcon />
              <StyledVideo
                autoPlay
                muted
                loop
              >
                <source src={'/videos/paankouri/world.webm'} type="video/webm" />
              </StyledVideo>
            </React.Fragment>
          )
      }
    </IconButton>
  )
};

export default styled(WorldButton)(({ theme, isDonationPanelOpen = false }) => ({
  position: 'fixed',
  bottom: theme.Spaces.hecto,
  right: !isDonationPanelOpen ?
    `calc(${theme.Spaces.xl} - ${theme.Spaces.xxs})` :
    `calc(${theme.Widths.donationPanel.width} - ${theme.Spaces.xxl})`
  ,
  zIndex: theme.Shadows.low.zIndex - 1,
  boxShadow: theme.shadows[5],
  transition: theme.Transitions.createTransition(
    [
      {
        property: 'box-shadow',
        duration: 'short',
        easing: 'easeIn'
      },
      {
        property: 'bottom',
        duration: 'short',
        easing: 'easeIn'
      },
      {
        property: 'right',
        duration: 'short',
        easing: 'easeIn'
      },
      {
        property: 'transform',
        duration: 'short',
        easing: 'easeIn'
      },
      {
        property: 'background-color',
        duration: 'short',
        easing: 'easeIn'
      }
    ]
  ),

  height: '5rem',
  width: '5rem',
  borderRadius: '50%',
  overflow: 'hidden',
  padding: 0,
  backgroundColor: isDonationPanelOpen ?
    (theme.palette.error.main + ' !important') :
    (theme.palette.background.paper + ' !important')
  ,

  '&:hover': {
    boxShadow: theme.shadows[3],
  },

  transform: !isDonationPanelOpen ?
    'scale(1)' :
    'scale(0.65)'
  ,
}));