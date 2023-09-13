import React from 'react';
import { Typography, styled, useTheme } from '@mui/material';
import { ContentTitleDivider } from '@components/Dividers';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';

interface MalkohaProps {
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

const Malkoha: React.FC<MalkohaProps> = ({
  content: {
    title,
    sloganHTML,
    descriptionHTML,
    button,
  },
  ...props
}) => {
  return (
    <section {...props}>
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
    </section>
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