import { CopyrightTextProps } from '@interfaces/TypographyProps';
import { Typography, styled } from '@mui/material';
import React from 'react';

const CopyrightSection = styled('section')(({ theme }) => ({
  gridColumn: '1 / 8',
  gridRow: '25 / 26',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));

const CopyRightText = styled(Typography)<CopyrightTextProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: 0,
  whiteSpace: 'nowrap',
}));

const Copyright = () => {

  const thisYear = new Date().getFullYear();

  return (
    <CopyrightSection>
      <CopyRightText 
        component='span'
        variant="body2"
      >
        © {thisYear} Indian Media Syndicate. All rights reserved.
      </CopyRightText>
    </CopyrightSection>
  )
}

export default Copyright;