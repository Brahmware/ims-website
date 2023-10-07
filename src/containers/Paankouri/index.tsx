import React from 'react';
import WorldButton from './WorldButton';
import DonationtPanel from './DonationPanel';

interface PaankouriProps {
  children: React.ReactNode;
};

const Paankouri: React.FC<PaankouriProps> = ({ children }) => {

  const [isDonationtPanelOpen, setIsDonationtPanelOpen] = React.useState(false);
  return (
    <React.Fragment>
      {children}
      <WorldButton
        isDonationPanelOpen={isDonationtPanelOpen}
        onClick={() => setIsDonationtPanelOpen(!isDonationtPanelOpen)}
      />
      <DonationtPanel isDonationPanelOpen={isDonationtPanelOpen} />
    </React.Fragment>
  )
};

export default Paankouri;