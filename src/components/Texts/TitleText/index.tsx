import React from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
}));

const TitleText: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <StyledTypography
      {...props}
      variant='h2'
      component='h1'
    >
      {props.children}
    </StyledTypography>
  )
};

export default TitleText;