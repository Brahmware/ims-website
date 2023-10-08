import React from 'react';
import { Box, BoxProps, alpha, styled } from '@mui/material';

interface BackgroundVeilProps extends BoxProps {
  isDonationPanelOpen: boolean;
}

const BackgroundVeil: React.FC<BackgroundVeilProps> = ({ isDonationPanelOpen, ...props }) => {
  return (
    <Box {...props}>BackgroundVeil</Box>
  )
}

export default styled(BackgroundVeil)(({ theme, isDonationPanelOpen }) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: theme.Shadows.low.zIndex - 3,
  background: `linear-gradient(
    90deg, 
    rgba(0,0,0,0) 0%, 
    ${alpha(theme.palette.background.default, 0.5)} 15%,
    ${theme.palette.background.default} 80%
  )`,

  transition: theme.Transitions.createTransition([
    {
      property: 'transform',
      duration: 'short',
      easing: 'easeIn'
    }
  ]),

  transform: isDonationPanelOpen ? 'translateX(0)' : 'translateX(100%)'
}));