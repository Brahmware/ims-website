import React from 'react';
import { ContentTitleDivider } from '@components/Dividers';
import { styled } from '@mui/material';
import MynaButton from './MynaButton';
import TitleText from '@components/Texts/TitleText';
import BodyText from '@components/Texts/BodyText';
import HighlightedBodyText from '@components/Texts/HighlightedBodyText';

type updown = 'up' | 'down';
export type ContentType = {
  stat?: string;
  context?: string;
  descriptionHTML?: string;
  button?: {
    buttonText: string;
    link?: string;
    onClick?: () => void;
  }
}

interface MynaProps {
  updown?: updown;
  content: ContentType[];
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

const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.Breakpoints.values.xs,
  height: '100%',
  minHeight: '15em',
  padding: theme.Spaces.sm,

  '& h2': {
    textAlign: 'center',
  },
  '& p': {
    textAlign: 'center',
  },

  '@media (max-width: 1150px)': {
    minHeight: '18em',
    width: theme.Breakpoints.values.md,
    padding: theme.Spaces.xl,
  },

}));

const Myna: React.FC<MynaProps> = ({
  updown = 'up',
  content,
  ...props
}) => {
  return (
    <Section updown={updown}>
      <ul {...props}>
        {typeof content === 'object' && content.map((item, index) => (
          <ListItem key={index}>
            <TitleText sx={{ textAlign: 'center' }}>
              {item.stat}
            </TitleText>
            <ContentTitleDivider sx={{ my: 1 }} />
            <HighlightedBodyText sx={{ textAlign: 'center', my: 0.5 }}>
              {item.context}
            </HighlightedBodyText>
            <BodyText sx={{ my: 0.5 }}
              dangerouslySetInnerHTML={{ __html: item.descriptionHTML || '' }}
            />
            <MynaButton button={item.button} />
          </ListItem>
        ))}
      </ul>
    </Section>
  )
};

export default styled(Myna)(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.Breakpoints.values.xl,
  margin: '0 auto',
  padding: theme.Spaces.xxl + ' ' + theme.Spaces.md,
  display: 'flex',
  justifyContent: 'space-between',

  '& hr': {
    alignSelf: 'center',
  },

  '@media (max-width: 1150px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));