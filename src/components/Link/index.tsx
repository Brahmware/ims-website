import React from 'react';
import NextLink from 'next/link';
import { LinkProps } from '@interfaces/LinkProps';
import { styled } from '@mui/material';
import ArrowIcon from '@icons/utility/ArrowIcon';

const StyledLink = styled(NextLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textUnderlineOffset: '0.1rem',
  whiteSpace: 'nowrap',
  transition: theme.Transitions.createTransition({ property: 'color' }),

  '&:hover': {
    color: theme.palette.primary.main,
  }
}));

const StyledExternalLink = styled(StyledLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.Spaces.xs,

  '& .strokes': {
    fill: theme.palette.text.secondary,
    transition: theme.Transitions.createTransition([{ property: 'fill' }, { property: 'transform' }]),
  },

  '&:hover': {

    '& .strokes': {
      fill: theme.palette.primary.main,
    },

    '[data-name="arrow"]': {
      transform: 'rotate(45deg)',
    }
  }
}));

const StyledArrowIcon = styled(ArrowIcon)(({ theme }) => ({
  width: '1.5rem',
  height: '1.5rem',
  transition: theme.Transitions.createTransition([
    { property: 'stroke' },
    { property: 'transform' },
  ]),

  '& path': {
    fill: theme.palette.primary.main,
  } 
}));

const Link = ({ href, target, rel, children }: LinkProps) => {

  if (target === '_blank') {
    return (
      <StyledExternalLink
        passHref
        href={href}
      >
        {children}
        <StyledArrowIcon />
      </StyledExternalLink>
    )
  };

  return (
    <StyledLink
      passHref
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </StyledLink>
  )
};

export default Link;