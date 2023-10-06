import React from 'react';
import ContactUs, { ContactUsProps } from '@components/ContactUs';
import { alpha, styled } from '@mui/material'
import { useNavHoverContext } from '@helpers/NavHoverContext';

const Contact: React.FC<ContactUsProps> = (props) => {

  const { setCurrentUrl, resetCurrentUrl } = useNavHoverContext();

  return (
    <ContactUs
      {...props}
      onMouseEnter={() => setCurrentUrl('/videos/navmenu/contact-us.webm')}
      onMouseLeave={resetCurrentUrl}
    />
  )
};

export default styled(Contact)(({ theme }) => ({
  gridColumn: '1/6',
  gridRow: '19/24',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  alignItems: 'flex-start',
  width: '100%',
  zIndex: theme.Shadows.medium.zIndex,

  '& *': {
    textShadow: `${alpha(theme.Colors.black, 0.25)} 1px 0 10px`,
  },

  '@media (max-width: 820px)': {
    gridColumn: '1 / 25',
    gridRow: '10 / 23',
    justifyContent: 'start',
  },

  '@media (max-width: 440px)': {
    gridColumn: '1 / 25',
    gridRow: ' 19 / 21',
    justifyContent: 'start',
    alignItems: 'center',
  }
}));