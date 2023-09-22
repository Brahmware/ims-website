import React from 'react';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { Package } from '../..';
import { TypographyProps } from '@interfaces/TypographyProps';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({ 
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.secondary.contrastText,

  transition: theme.Transitions.createTransition({ 
    property: 'color',
    duration: 'short',
    easing: 'easeOut',
  }),
}));

interface PackageTitleProps extends BoxProps {
  children?: React.ReactNode;
  name?: Package['name'];
  price?: Package['price'];
};

const PackageTitle: React.FC<PackageTitleProps> = ({
  name,
  price,
  ...props
}) => {
  return (
    <Box {...props} className={props.className + " package__title"}>
      <StyledTypography variant='h5' component='h2'>
        {name}
      </StyledTypography>
      <StyledTypography variant='h5' component='h3'>
        {price}
      </StyledTypography>
    </Box>
  )
}

export default styled(PackageTitle)(({ theme }) => ({
  width: '94%',
  height: '80%',
  transform: 'translateY(5%)',
  justifySelf: 'center',
  padding: '0 ' + theme.spacing(5),
  backgroundColor: theme.palette.secondary.main,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  borderRadius: '1.25rem',

  boxShadow: theme.shadows[2],
  transition: theme.Transitions.createTransition({
    property: 'background-color',
    duration: 'short',
    easing: 'easeOut',
  }),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));