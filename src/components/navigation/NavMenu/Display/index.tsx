import { useNavHoverContext } from '@helpers/NavHoverContext';
import { styled } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const DisplayWrapper = styled('div')(({ theme }) => ({
  gridColumn: '19/25',
  gridRow: '-6/-7',
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: theme.Shadows.lower.zIndex,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'longest'
  }),
  transform: 'scale(1.25) translateX(-2rem) translateY(-2rem)',

  [theme.breakpoints.down('xl')]: {
    gridColumn: '18/25',
    gridRow: '-6/-7',
    transform: 'scale(1.5) translateX(-3rem) translateY(-4rem)',
  },

  [theme.breakpoints.down('lg')]: {
    gridColumn: '17/25',
    gridRow: '-6/-7',
    transform: 'scale(2.125) translateX(-2rem) translateY(-4rem)',
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  zIndex: 1,
}));

const StyledVideo = styled('video')(({ theme }) => ({
  position: 'absolute',
  width: 380,
  height: 320,
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
        height={320}
        width={430}
        objectFit='contain'
        objectPosition='center'
        onLoad={(e) => {
          e.currentTarget.classList.add('loaded')
        }}
      />
      <StyledVideo
        src={currentUrl}
        autoPlay
        muted
        loop
        onError={() => setCurrentUrl('/videos/white_noise.webm')}
      />
    </DisplayWrapper>
  )
};

export default Display;