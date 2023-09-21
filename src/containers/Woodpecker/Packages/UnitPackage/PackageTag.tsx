import { TypographyProps } from '@interfaces/TypographyProps';
import { Typography, styled } from '@mui/material';
import React from 'react';

interface PackageTagProps extends TypographyProps {
  tag: string;
};

const PackageTag: React.FC<PackageTagProps> = ({
  tag,
  ...props
}) => {
  return (
    <Typography 
      {...props}
      className={props.className + " package__tag"}
      variant='body1'
      component='span'
    >
      {tag}
    </Typography>
  )
};

export default styled(PackageTag) (({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%, 50%)',

  backgroundColor: theme.palette.secondary.dark,
  padding: theme.Spaces.xxs + ' ' + theme.Spaces.md,
  color: theme.palette.secondary.contrastText,
  boxShadow: theme.shadows[2],

  fontSize: '0.75rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  letterSpacing: '0.1rem',
  borderRadius: '1.618rem',
  fontWeight: theme.typography.fontWeightRegular,

  transition: theme.Transitions.createTransition({
    property: 'background-color',
    duration: 'short',
    easing: 'easeOut',
  }),
}));