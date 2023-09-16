import React from 'react';
import { styled } from '@mui/material';
import Showcase, { ShowcaseImage } from './Showcase';
import Content from './Content';

export type updown = 'up' | 'down';

interface KoelProps {
  updown?: updown;
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

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  updown?: updown;
};

const Section = styled('section')<SectionProps>(({ theme, updown }) => ({
  height: 'max-content',
  width: '100%',
  backgroundColor: updown === 'up' ? theme.palette.background.default : theme.palette.background.paper,
}));

const Koel: React.FC<KoelProps> = ({
  updown = 'up',
  images,
  direction = 'ltr',
  content,
  ...props
}) => {
  return (
    <Section updown={updown} >
      <div {...props} >
        <Showcase {...images} direction={direction} updown={updown}/>
        <Content {...content} direction={direction} />
      </div>
    </Section>
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
    padding: 0,
    gridTemplateColumns: 'repeat(20, 1fr)',
    gridTemplateRows: 'repeat(20, 1fr)',
  },
}));