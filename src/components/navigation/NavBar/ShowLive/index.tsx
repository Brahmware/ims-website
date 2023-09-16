import ContainedButton from '@components/Button/ContainedButton';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import { styled } from '@mui/material'
import React from 'react'


const AliveIcon = styled('div')(({ theme }) => ({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: theme.Colors.white,
  marginLeft: theme.Spaces.sm,
  marginRight: `-${theme.Spaces.xs}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
}));

const Flare = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: 'inherit',
  position: 'absolute',
  zIndex: 1,
  animation: 'pulse 2s infinite',
  
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: '1',
    },
    '100%': {
      transform: 'scale(2.5)',
      opacity: '0',
    },
  },
}));

const AliveComponent = () => {
  return (
    <AliveIcon>
      <Flare />
      <Flare sx={{ animationDelay: '1s' }} />
    </AliveIcon>
  )
};

const ShowLive: React.FC<ContainedButtonProps> = ({ ...props }) => {
  return (
    <ContainedButton
      {...props}
      color='error'
    >
      Live
      <AliveComponent />
    </ContainedButton>
  )
}

export default styled(ShowLive)(({ theme }) => ({
  margin: '0 ' + theme.Spaces.sm,
  fontWeight: theme.typography.fontWeightBold,
  paddingTop: theme.Spaces.xs,
  paddingBottom: theme.Spaces.xs,
  letterSpacing: '0.1em',
  minWidth: '100px',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& > div': {
      backgroundColor: theme.palette.error.main,
    },
  },
}));