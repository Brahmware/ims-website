import React from 'react';
import menuItems from './menuItems';
import { styled } from '@mui/material';
import NavGropus from './NavGroups';
import { MegamenuStateProvider } from '@helpers/MegamenuStateProvider';

const MegamenuSection = styled('section')(({ theme }) => ({
  gridColumn: '1 / 25',
  gridRow: '3 / 19',
  zIndex: theme.Shadows.high.zIndex,
  height: '100%',
  width: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  display: 'flex',
  flexDirection: 'row',

  justifyContent: 'start',
  alignItems: 'center',
  flexWrap: 'wrap',
  alignContent: 'flex-start',

  [theme.Breakpoints.down('tall')]: {
    alignContent: 'center',
  },
}));

const Megamenu = () => {
  return (
    <MegamenuSection>
      <MegamenuStateProvider>
        {menuItems.map((item, index) => (
          <NavGropus
            index={index}
            title={item.title}
            videoUrl={item.videoUrl}
            items={item.items}
          />
        ))}
      </MegamenuStateProvider>
    </MegamenuSection>
  )
};

export default Megamenu;