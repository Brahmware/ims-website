import React from 'react';
import { styled } from '@mui/material';
import ContainedButton from '@components/Button/ContainedButton';

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
}));

const Join = () => {
  return (
    <StyledButton
      onClick={() => console.log('Join')}
    >
      Join
    </StyledButton>
  )
}

export default Join