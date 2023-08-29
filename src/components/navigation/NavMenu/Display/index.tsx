import { useNavHoverContext } from '@helpers/NavHoverContext';
import { styled } from '@mui/material';
import { MediaWhiteNoiseSrc } from '@utils/const';
import Image from 'next/image';
import React from 'react'

const DisplayWrapper = styled('div')(({ theme }) => ({
  gridColumn: '19/25',
  gridRow: '1/25',
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'start',
  
  zIndex: theme.Shadows.lower.zIndex,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'longest'
  }),
  transform: 'scale(1.25) translateX(-2rem) translateY(3rem)',

  [theme.Breakpoints.down('xl')]: {
    gridColumn: '18/25',
    transform: 'scale(1.5) translateX(-3rem) translateY(1rem)',
  },

  [theme.Breakpoints.down('lg')]: {
    gridColumn: '17/25',
    transform: 'scale(2.125) translateX(-2rem) translateY(1rem)',
  },

  [theme.Breakpoints.down('sm')]: {
    transform: 'scale(2) translateX(0rem) translateY(-1rem)',
  },


  // Handle height beakpoints
  [theme.Breakpoints.down('tall')]: {
    transform: 'scale(1.5) translateX(-3rem) translateY(1rem)',
    gridRow: '1/25',
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  zIndex: theme.Shadows.lower.zIndex,
  height: 620,
  width: 430,
  objectFit: 'contain',
  objectPosition: 'center',
}));

const StyledVideo = styled('video')(({ theme }) => ({
  position: 'absolute',
  width: 380,
  height: 324,
  objectFit: 'cover',
  zIndex: -1,
  transform: 'scale(0.6) translateX(-7rem) translateY(-2.5rem)',
}));


const Display = () => {

  const { currentUrl, setCurrentUrl } = useNavHoverContext();

  return (
    <DisplayWrapper>
      <StyledImage
        priority
        src='/images/navigation-menu-tv.png'
        alt='tv'
        height={620 * 2}
        width={430 * 2}
        onLoad={(e) => {
          e.currentTarget.classList.add('loaded')
        }}
      />
      <StyledVideo
        src={currentUrl}
        autoPlay
        muted
        loop
        onError={() => setCurrentUrl(MediaWhiteNoiseSrc)}
      />
    </DisplayWrapper>
  )
};

export default Display;