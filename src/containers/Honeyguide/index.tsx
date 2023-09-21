import { styled } from '@mui/material';
import React from 'react';
import HoneyguideLoading from './HoneyguideLoading';
import dynamic from 'next/dynamic';

type updown = 'up' | 'down';
export type ContentType = {
  id?: string;
  title?: string;
  link?: string;
};

interface HoneyguideProps {
  updown?: updown;
  content?: ContentType[];
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


const Honeyguide: React.FC<HoneyguideProps> = ({
  updown = 'up',
  content,
  ...props
}) => {

  const DynamicHoneyframes = dynamic(() => import('./DynamicHoneyframes'), {
    loading: () => (
      <HoneyguideLoading loadingContent={content} />
    ),
    ssr: false,
  });

  return (
    <Section
      updown={updown}
      {...props}
    >
      <DynamicHoneyframes dynamicContent={content} />
    </Section>
  )
};

export default Honeyguide;