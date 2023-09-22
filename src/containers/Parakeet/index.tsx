import React from 'react';
import { styled } from '@mui/material';
import BackgroundImage, { BackgroundImageProps } from './BackgroundImage';
import Content, { AdsContentProps } from './Content';

interface ParakeetProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: BackgroundImageProps;
  advertisement?: AdsContentProps;
};

const Parakeet: React.FC<ParakeetProps> = ({
  children,
  image,
  advertisement,
  ...props
}) => {
  return (
    <div {...props}>
      <BackgroundImage
        src={image?.src}
        alt={image?.alt}
      />
      <Content 
        headline={advertisement?.headline}
        slogan={advertisement?.slogan}
        button={advertisement?.button}
      />
    </div>
  )
};

export default styled(Parakeet)(({ theme }) => ({
  width: '100%',
  height: '25rem',
  position: 'relative',
  overflow: 'hidden',
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));