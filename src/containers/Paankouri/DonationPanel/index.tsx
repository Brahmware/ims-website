import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Banner from './Banner';

const DonationContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  display: 'grid',
  gridTemplateColumns: `
    ${theme.Spaces.lg} 
    ${theme.Spaces.lg} 
    1fr 
    ${theme.Spaces.lg}
    ${theme.Spaces.lg}
  `,
}));

interface DonationPanelProps extends BoxProps {
  isDonationPanelOpen: boolean;
};

const DonationPanel: React.FC<DonationPanelProps> = ({ isDonationPanelOpen, ...props }) => {
  return (
    <Box {...props}>
      <DonationContent >
        <Banner />
      </DonationContent>
    </Box>
  )
};

export default styled(DonationPanel)(({ theme, isDonationPanelOpen }) => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: isDonationPanelOpen ? 0 : `-${theme.Widths.donationPanel.width}`,
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

  backgroundColor: theme.palette.background.paper,
  width: '25rem',
  height: '100%',
  marginTop: theme.Heights.header.default,
}));