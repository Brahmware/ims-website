import ContainedButton from '@components/Button/ContainedButton';
import FilmCameraIcon from '@icons/utility/FilmCameraIcon';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import { Typography, styled, useMediaQuery } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import AliveIndicator from './AliveIndicator';

const ShowLive: React.FC<ContainedButtonProps> = ({ ...props }) => {

  const showCamera = useMediaQuery('(max-width: 470px)');

  return (
    <ContainedButton
      {...props}
      color='error'
      component={Link}
      href='https://live.indianmediasyndicate.com'
    >
      {showCamera ?
        <FilmCameraIcon /> : (
          <React.Fragment>
            <span>Live</span>
            <AliveIndicator />
          </React.Fragment>
        )
      }
    </ContainedButton>
  )
};

export default styled(ShowLive)(({ theme }) => ({
  margin: '0 ' + theme.Spaces.sm,
  fontWeight: theme.typography.fontWeightBold,
  paddingTop: theme.Spaces.xs,
  paddingBottom: theme.Spaces.xs,
  letterSpacing: '0.1em',
  minWidth: '100px',

  '@media (max-width: 470px)': {
    minWidth: 'unset',
    padding: theme.Spaces.xs,
  },

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    '& > div': {
      backgroundColor: theme.palette.error.main,
    },

    '& svg': {
      '& path': {
        fill: theme.palette.secondary.contrastText,
      },
    },
  },
}));