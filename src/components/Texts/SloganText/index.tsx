import React from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: theme.Spaces.md + ' 0',
}));

const SloganText: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <StyledTypography
      {...props}
      variant='body2'
      component='h2'
    >
      {props.children}
    </StyledTypography>
  )
};

export default SloganText;