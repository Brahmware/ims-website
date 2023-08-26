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
  zIndex: theme.Shadows.medium.zIndex,
}));

const CopyRightText = styled(Typography)<CopyrightTextProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: 0,
  whiteSpace: 'nowrap',
}));

const CopyrightYear = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(0.6),
}));

const Copyright = () => {

  const today = new Date();

  return (
    <CopyrightSection>
      <CopyRightText
        component='h3'
        variant='body1'
      >
        <CopyrightYear>© {today.getFullYear()}</CopyrightYear>
        Indian Media Syndicate. All rights reserved.
      </CopyRightText>
    </CopyrightSection>
  )
}

export default Copyright;