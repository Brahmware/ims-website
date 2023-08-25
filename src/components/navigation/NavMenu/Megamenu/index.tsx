import React from 'react';
import menuItems from './menuItems';
import { styled } from '@mui/material';
import NavGropus from './NavGroups';

const MegamenuSection = styled('section')(({ theme }) => ({
  gridColumn: '1 / 17',
  gridRow: '3 / 19',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const Megamenu = () => {
  return (
    <MegamenuSection>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <NavGropus
            title={item.title}
            videoUrl={item.videoUrl}
            items={item.items}
          />
        </React.Fragment>
      ))}
    </MegamenuSection>
  )
};

export default Megamenu;