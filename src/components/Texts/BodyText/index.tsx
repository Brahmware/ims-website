import React from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

interface BodyTextProps extends TypographyProps {
  children?: React.ReactNode;
  href?: string;
};

const StyledTypography = styled(Typography)<BodyTextProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const BodyText: React.FC<BodyTextProps> = ({ ...props }) => {
  return (
    <StyledTypography
      {...props}
      variant='body1'
      component='p'
    >
      {props.children}
    </StyledTypography>
  )
};

export default BodyText;