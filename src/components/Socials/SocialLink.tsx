import { SocialLinkProps } from '@interfaces/LinkProps';
import { styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const StyledSocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SocialLink = (
  {
    href = '',
    target = '_blank',
    rel = 'noreferrer',
    children,
  } : SocialLinkProps
) => {
  return (
    <StyledSocialLink
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </StyledSocialLink>
  )
};

export default SocialLink;