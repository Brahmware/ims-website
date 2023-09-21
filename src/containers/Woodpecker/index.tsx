import React from 'react';
import { styled } from '@mui/material';
import { ContentTitleDivider } from '@components/Dividers';
import TitleText from '@components/Texts/TitleText';
import SloganText from '@components/Texts/SloganText';
import Packages from './Packages';

type updown = 'up' | 'down';

export type Package = {
  id: string;
  name: string;
  price: string;
  tag?: string;
  features: string[];
};

type Heading = {
  title?: string;
  sloganHTML?: string;
};

interface WoodpeckerProps {
  updown?: updown;
  heading: Heading;
  packages?: Package[];
};

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  updown?: updown;
};


const Section = styled('section')<SectionProps>(({ theme, updown }) => ({
  height: 'max-content',
  width: '100%',
  paddingBottom: theme.Spaces.md,
  backgroundColor: updown === 'up' ? theme.palette.background.default : theme.palette.background.paper,
}));

const Woodpecker: React.FC<WoodpeckerProps> = ({
  updown = 'up',
  heading: {
    title,
    sloganHTML,
  },
  packages,
  ...props
}) => {
  return (
    <Section updown={updown}>
      <div {...props} >
        <SloganText> {title} </SloganText>
        <TitleText dangerouslySetInnerHTML={{ __html: sloganHTML || '' }} />
        <ContentTitleDivider sx={{ my: 3 }} />
        <Packages packages={packages} />
      </div>
    </Section>
  )
};

export default styled(Woodpecker)(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.Breakpoints.values.xl,
  margin: '0 auto',
  padding: theme.Spaces.xxl + ' ' + theme.Spaces.md,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > *': {
    textAlign: 'center',
  },

  '& hr': {
    alignSelf: 'center',
  },

  '& br': {
    display: 'none'
  },

  '& p > br': {
    display: 'block'
  }
}));