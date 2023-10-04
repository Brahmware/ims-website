import React from 'react';
import { NavItem } from '@datatypes/NavMap';
import { styled } from '@mui/material';
import Link from '@components/Link';

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '0.85rem',
  whiteSpace: 'nowrap',
}));

interface UnitPageProps extends NavItem {
  children?: React.ReactNode;
};

const UnitPage: React.FC<UnitPageProps> = ({
  title,
  link
}) => {
  return (
    <StyledLink href={link}>
      {title}
    </StyledLink>
  )
};

export default UnitPage;