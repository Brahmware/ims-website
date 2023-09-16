import React from 'react';
import { Typography, styled, useTheme } from '@mui/material';
import { ContentTitleDivider } from '@components/Dividers';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';

type updown = 'up' | 'down';
interface MalkohaProps {
  updown?: updown;
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
  paddingBottom: theme.Spaces.md,
  backgroundColor: updown === 'up' ? theme.palette.background.default : theme.palette.background.paper,
}));

const Malkoha: React.FC<MalkohaProps> = ({
  updown = 'up',
  content: {
    title,
    sloganHTML,
    descriptionHTML,
    button,
  },
  ...props
}) => {
  return (
    <Section updown={updown}>
      <div {...props} >
        <Typography
          variant="body2"
          component='h3'
          sx={{ my: 2 }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          component='h2'
          dangerouslySetInnerHTML={{ __html: sloganHTML || '' }}
        />
        <ContentTitleDivider sx={{ my: 3 }} />
        <Typography
          variant="body1"
          component='p'
          sx={{ maxWidth: useTheme().Breakpoints.values.md }}
          dangerouslySetInnerHTML={{ __html: descriptionHTML || '' }}
        />
        {
          button && (
            button.link ? (
              <ContainedButton
                color="secondary"
                aria-label='view more about us'
                vocab='view more about us'
                sx={{ my: 3 }}
                component={Link}
                href={button.link}
              >
                {button.buttonText}
              </ContainedButton>
            ) : (
              <ContainedButton
                color="secondary"
                aria-label='view more about us'
                vocab='view more about us'
                sx={{ my: 3 }}
                onClick={button.onClick}
              >
                {button.buttonText}
              </ContainedButton>
            )
          )
        }
      </div>
    </Section>
  )
};

export default styled(Malkoha)(({ theme }) => ({
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