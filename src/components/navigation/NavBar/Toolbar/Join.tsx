import React from 'react';
import { styled } from '@mui/material';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
}));

const Join = () => {
  return (
    <StyledButton
      component={Link}
      href='/join'
    >
      Join
    </StyledButton>
  )
}

export default Join