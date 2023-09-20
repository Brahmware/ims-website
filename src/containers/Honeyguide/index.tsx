import { styled } from '@mui/material';
import React from 'react';
import HoneyguideLoading from './HoneyguideLoading';
import dynamic from 'next/dynamic';

type updown = 'up' | 'down';

interface HoneyguideProps {
  updown?: updown;
};

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  updown?: updown;
};

const Section = styled('section')<SectionProps>(({ theme, updown }) => ({
  width: '100%',
  height: '15rem',
  backgroundColor: updown === 'up' ? theme.palette.background.default : theme.palette.background.paper,
  overflow: 'hidden',
}));

const DynamicHoneyframes = dynamic(() => import('./DynamicHoneyframes'), {
  loading: () => <HoneyguideLoading />,
  ssr: false,
});

const Honeyguide: React.FC<HoneyguideProps> = ({
  updown = 'up',
  ...props
}) => {
  return (
    <Section
      updown={updown}
      {...props}
    >
      <DynamicHoneyframes />
    </Section>
  )
};

export default Honeyguide;