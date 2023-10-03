import NoImageIcon from '@icons/utility/NoImageIcon';
import { styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const StyledNoImageIcon = styled(NoImageIcon)(({ theme }) => ({
  height: '20%',
  width: '100%',
}));

interface PhotoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
};

const PhotoFrame: React.FC<PhotoFrameProps> = ({
  src,
  alt,
  ...props
}) => {
  return (
    <div {...props}>
      {
        src ? (
          <Image
            src={src}
            alt={alt || 'Photo Frame'}
            layout={'fill'}
            objectFit={'cover'}
            quality={100}
          />
        ) : (
          <StyledNoImageIcon />
        )
      }
    </div>
  )
};

export default styled(PhotoFrame)(({ theme }) => ({
  position: 'relative',
  borderRadius: '1rem',
  gridColumn: '2 / 21',
  gridRow: '2 / 21',
  height: '100%',
  width: '100%',
  zIndex: 2,

  overflow: 'hidden',
  backgroundColor: theme.Colors.bhasma,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[2],
  transition: theme.Transitions.createTransition({
    duration: 'shorter',
    easing: 'easeIn',
    property: 'box-shadow',
  }),

  '&:hover': {
    boxShadow: theme.shadows[4],
  },

  '@media screen and (max-height: 1230px)': {
    gridColumn: '1 / 13',
    gridRow: '3 / 19',
  },
  
  '@media screen and (max-height: 960px)': {
    gridColumn: '1 / 13',
    gridRow: '3 / 21',
  },
  
  '@media screen and (max-height: 860px)': {
    gridColumn: '1 / 13',
    gridRow: '1 / 21',
  },
}));