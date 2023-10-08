import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Banner from './Banner';
import MotivationBox from './MotivationBox';
import { Donation } from '@datatypes/Donation';
import TakeAction from './TakeAction';

const DonationContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',

  display: 'grid',
  gridTemplateColumns: `${theme.Spaces.lg} ${theme.Spaces.lg} 1fr ${theme.Spaces.lg} ${theme.Spaces.lg}`,
  gridTemplateRows: `${theme.Heights.header.default} repeat(3, auto ${theme.Spaces.xxl})`,
}));

interface DonationPanelProps extends BoxProps {
  isDonationPanelOpen: boolean;
};

const DonationPanel: React.FC<DonationPanelProps> = ({ isDonationPanelOpen, ...props }) => {

  const [data, setData] = React.useState<Donation>({} as Donation);

  React.useEffect(() => {
    fetch('/api/website/donation')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Box {...props}>
      <DonationContent>
        <Banner
          title={data.title}
          videoUrl={data.videoUrl}
        />
        <MotivationBox
          title={data.title}
          slogan={data.slogan}
          description={data.description}
        />
        <TakeAction donationAmounts={data.donationAmounts} />
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
  width: theme.Widths.donationPanel.width,
  height: '100%',
}));