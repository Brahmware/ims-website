import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

interface DonationPanelProps extends BoxProps {
  isDonationPanelOpen: boolean;
};

const DonationPanel: React.FC<DonationPanelProps> = ({ isDonationPanelOpen, ...props }) => {
  return (
    <Box {...props}>
      DonationPanel
    </Box>
  )
};

export default styled(DonationPanel)(({ theme, isDonationPanelOpen }) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: isDonationPanelOpen ? 0 : '-25rem',
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
        property: 'right',
        duration: 'short',
        easing: 'easeIn'
      }
    ]
  ),

  '&:hover': {
    boxShadow: theme.shadows[3],
  },

  backgroundColor: theme.palette.background.paper,
  width: '25rem',
}));