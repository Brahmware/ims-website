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
  margin: `${theme.Spaces.sm} 0`,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  cursor: 'default',
}));

export default Title;
