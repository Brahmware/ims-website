import React from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
}));

const HighlightedBodyText: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <StyledTypography
      {...props}
      variant='body1'
      component='p'
    >
      {props.children}
    </StyledTypography>
  )
}

export default HighlightedBodyText