import React from 'react';
import menuItems from './menuItems';
import { styled } from '@mui/material';
import NavGropus from './NavGroups';

const MegamenuSection = styled('section')(({ theme }) => ({
  gridColumn: '1 / 25',
  gridRow: '3 / 19',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  flexWrap: 'wrap',
  zIndex: theme.Shadows.high.zIndex,

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

const Megamenu = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default Megamenu;