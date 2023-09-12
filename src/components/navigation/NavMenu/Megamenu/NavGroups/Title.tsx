import React from 'react';
import { TitleProps } from '@interfaces/TypographyProps';
import { Typography, styled } from '@mui/material';

const Title = styled(({ children, ...props }: TitleProps) => {
  return (
    <Typography variant="h5" component="h3" {...props}>
      {children}
    </Typography>
  );
})(({ theme }) => ({
  padding: theme.Spaces.sm,
  fontWeight: theme.FontWeights.fontWeightUltra,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  cursor: 'default',
  width: '100%',
}));

export default Title;
