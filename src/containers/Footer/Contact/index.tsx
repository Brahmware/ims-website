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
  gridRow: '16 / 19',
}));