import ContainedButton from '@components/Button/ContainedButton';
import { ContentTitleDivider } from '@components/Dividers';
import { Typography, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type updown = 'up' | 'down';
type ContentType = {
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
  width: 'max-content',
  maxWidth: theme.Breakpoints.values.xs,
  height: '100%',
  padding: theme.Spaces.sm,
  
  '& h2': {
    textAlign: 'center',
  },
  '& p': {
    textAlign: 'center',
  },
  '& button': {
    alignSelf: 'center',
    justifySelf: 'end',
  }
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
            <Typography
              variant='h2'
              component='h2'
            >
              {item.stat}
            </Typography>
            <ContentTitleDivider sx={{ my: 1 }} />
            <Typography
              variant='body1'
              component='p'
              sx={{ my: 0.5 }}
            >
              {item.context}
            </Typography>
            <Typography
              variant='body1'
              component='p'
              sx={{ my: 0.5 }}
              dangerouslySetInnerHTML={{ __html: item.descriptionHTML || '' }}
            />
            {
              item.button && (
                item.button.link ? (
                  <ContainedButton
                    color="secondary"
                    aria-label='view more about us'
                    vocab='view more about us'
                    component={Link}
                    href={item.button.link}
                  >
                    {item.button.buttonText}
                  </ContainedButton>
                ) : (
                  <ContainedButton
                    color="secondary"
                    aria-label='view more about us'
                    vocab='view more about us'
                    onClick={item.button.onClick}
                  >
                    {item.button.buttonText}
                  </ContainedButton>
                )
              )
            }
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
}));