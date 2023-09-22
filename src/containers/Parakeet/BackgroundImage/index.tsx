import { alpha, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Glass = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: alpha(theme.Colors.bhasma, 0.25),
  zIndex: 1,
  boxShadow: 'inset ' + theme.shadows[20],
}));

const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  filter: 'blur(10px)',
  transform: 'scale(1.05)',
}));


export interface BackgroundImageProps {
  src?: string;
  alt?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt
}) => {
  return (
    <React.Fragment>
      <Glass />
      <StyledImage
        src={src || ''}
        alt={alt || ''}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </React.Fragment>
  )
}

export default BackgroundImage;