import ContainedButton from '@components/Button/ContainedButton';
import FilmCameraIcon from '@icons/utility/FilmCameraIcon';
import { ContainedButtonProps } from '@interfaces/ButtonProps';
import { styled, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link';
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

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <AliveIcon>
      {!loading &&
        <>
          <Flare />
          <Flare sx={{ animationDelay: '1s' }} />
        </>
      }
    </AliveIcon>
  )
};

const ShowLive: React.FC<ContainedButtonProps> = ({ ...props }) => {

  const showCamera = useMediaQuery('(max-width: 470px)');

  return (
    <ContainedButton
      {...props}
      color='error'
      component={Link}
      href='https://live.indianmediasyndicate.com'
    >
      {
        showCamera ?
          <FilmCameraIcon /> :
          <>
            Live
            <AliveComponent />
          </>
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