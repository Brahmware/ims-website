import React from 'react';
import WorldButton from './WorldButton';
import DonationtPanel from './DonationPanel';
import BackgroundVeil from './BackgroundVeil';


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
      <BackgroundVeil
        isDonationPanelOpen={isDonationtPanelOpen}
        onClick={() => setIsDonationtPanelOpen(false)}
      />
    </React.Fragment>
  )
};

export default Paankouri;