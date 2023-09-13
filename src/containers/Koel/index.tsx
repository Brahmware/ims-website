import { Box, styled } from '@mui/material';
import React from 'react';
import Showcase, { ShowcaseImage } from './Showcase';
import Content from './Content';

interface KoelProps {
  direction?: 'ltr' | 'rtl';
  images: {
    top: ShowcaseImage,
    bottom: ShowcaseImage
  };
  content: {
    title?: string;
    sloganHTML?: string;
    descriptionHTML?: string;
    button?: {
      buttonText: string;
      link?: string;
      onClick?: () => void;
    };
  }
};

const Koel: React.FC<KoelProps> = ({
  images,
  direction,
  content,
  ...props
}) => {
  return (
    <section {...props} >
      <Showcase {...images} />
      <Content {...content} />
    </section>
  )
};

export default styled(Koel)(({ theme, direction = 'ltr' }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.Breakpoints.values.xl,
  margin: '0 auto',
  padding: '0 ' + theme.Spaces.md,

  display: 'flex',
  flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.Breakpoints.down('lg')]: {
    display: 'grid',
    marginTop: theme.Spaces.sm,
    padding: 0,
    gridTemplateColumns: 'repeat(20, 1fr)',
    gridTemplateRows: 'repeat(20, 1fr)',
  },
}));