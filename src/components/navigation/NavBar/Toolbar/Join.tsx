import React from 'react';
import { styled } from '@mui/material';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
  textTransform: 'uppercase',
  fontWeight: theme.typography.fontWeightBold,
}));

const Join = () => {
  return (
    <StyledButton
      flipped
      color='secondary'
      component={Link}
      href='/join'
      sx={{ py: '0.5rem' }}
    >
      Join
    </StyledButton>
  )
}

export default Join