import { styled } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const DisplayWrapper = styled('div')(({ theme }) => ({
  gridColumn: '18/25',
  gridRow: '-6/-7',
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
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
        src='/videos/sample.mp4'
        autoPlay
        loop
        muted
      />
    </DisplayWrapper>
  )
}

export default Display