import React from 'react';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';
import JoinIcon from '@icons/utility/JoinIcon';
import IconButton from '@components/Button/IconButton';

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
  textTransform: 'uppercase',
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: '0.1em',
  minWidth: '100px',
}));

const Join = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery('(max-width: 675px)');

  if (isSmall) {
    return (
      <IconButton sx={{ mx: theme.Spaces.xs }} >
        <JoinIcon sx={{ ...theme.Sizes.icon.small }} />
      </IconButton>
    )
  }
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