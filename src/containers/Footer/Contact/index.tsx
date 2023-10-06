import React from 'react';
import { styled } from '@mui/material';
import ContactUs, { ContactUsProps } from '@components/ContactUs';


const Contact: React.FC<ContactUsProps> = (props) => {
  return (
    <ContactUs {...props} />
  )
};

export default styled(Contact)(({ theme }) => ({
  gridColumn: '1 / 10',
  gridRow: '16 / 20',
  height: 'max-content',

  '@media screen and (max-width: 1236px)': {
    gridRow: '17 / 20',
    alignSelf: 'center',
  },

  '@media screen and (max-width: 1180px)': {
    gridColumn: '10 / 16',
    gridRow: '13 / 18',
    alignItems: 'end',
  },

  '@media screen and (max-width: 960px)': {
    gridColumn: '1 / 10',
    gridRow: '7 / 8',
    alignItems: 'start',
  },

  '@media screen and (max-width: 840px)': {
    gridColumn: '1 / 21',
    gridRow: '9 / 10',
    justifySelf: 'center',
    alignItems: 'center',
  },
}));