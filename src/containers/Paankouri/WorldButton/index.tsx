import React from 'react';
import IconButton from '@components/Button/IconButton';
import { IconButtonProps } from '@interfaces/ButtonProps';
import { styled } from '@mui/material';
import FistIcon from '@icons/utility/FistIcon';
import CloseIcon from '@icons/utility/CloseIcon';

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: theme.Spaces.lg,
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
            <StyledCloseIcon />
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
    'scale(0.6)'
  ,
}));