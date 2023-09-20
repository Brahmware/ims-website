import { styled } from '@mui/material';
import React from 'react';

type updown = 'up' | 'down';

interface HoneyguideProps {
  updown?: updown;
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

const Honeyguide: React.FC<HoneyguideProps> = ({
  updown = 'up',
  ...props
}) => {
  return (
    <Section updown={updown} {...props}>
      <h1>Honeyguide</h1>
    </Section>
  )
};

export default Honeyguide;