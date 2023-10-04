import React from 'react';
import { CopyrightTextProps } from '@interfaces/TypographyProps';
import { Typography, styled } from '@mui/material';

const CopyRightText = styled(Typography)<CopyrightTextProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: 0,
  whiteSpace: 'nowrap',

  '@media (max-width: 580px)': {
    whiteSpace: 'unset',
  },
}));

const CopyrightYear = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(0.6),
}));

export interface CopyRightProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
};

const CopyRight: React.FC<CopyRightProps> = (props) => {

  const today = new Date();

  return (
    <section {...props}>
      <CopyRightText
        component='h3'
        variant='body1'
      >
        <CopyrightYear>© {today.getFullYear()}</CopyrightYear>
        Indian Media Syndicate. All rights reserved.
      </CopyRightText>
    </section>
  )
};

export default styled(CopyRight)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));