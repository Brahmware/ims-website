import { Typography, TypographyProps, styled } from '@mui/material';
import React from 'react';

interface TitleProps extends TypographyProps {
  children: React.ReactNode;
}

const Title = styled(({ children, ...props }: TitleProps) => {
  return (
    <Typography variant="h5" component="h3" {...props}>
      {children}
    </Typography>
  );
})(({ theme }) => ({
  padding: theme.Spaces.sm,
  fontWeight: theme.FontWeights.fontWeightUltra,
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.secondary.contrastText,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  cursor: 'default',
  width: '100%',
}));

export default Title;
