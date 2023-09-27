import React from 'react';
import { BoxProps, Box, styled, Typography, alpha } from '@mui/material';
import { CopyrightTextProps } from '@interfaces/TypographyProps';

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

interface CopyrightProps extends BoxProps {
};

const Copyright: React.FC<CopyrightProps> = (props) => {
  const today = new Date();
  return (
    <Box {...props}>
      <CopyRightText
        component='h3'
        variant='body1'
      >
        <CopyrightYear>© {today.getFullYear()}</CopyrightYear>
        Indian Media Syndicate. All rights reserved.
      </CopyRightText>
    </Box>
  )
};

export default styled(Copyright)(({ theme }) => ({
  gridColumn: '1 / 10',
  gridRow: '20 / 21',
  
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  zIndex: theme.Shadows.medium.zIndex,

  '& *': {
    textShadow: `${alpha(theme.Colors.black, 0.25)} 1px 0 10px`,
  },
}));