import React from 'react';
import { TitleProps } from '@interfaces/TypographyProps';
import { styled } from '@mui/material';
import TitleText from '@components/Texts/TitleText';

const Title = styled(({ children, ...props }: TitleProps) => {
  return (
    <TitleText {...props}>
      {children}
    </TitleText>
  );
})(({ theme }) => ({
  padding: theme.Spaces.sm,
  fontWeight: theme.FontWeights.fontWeightUltra,
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  whiteSpace: 'nowrap',
  cursor: 'default',
  width: '100%',
}));

export default Title;
