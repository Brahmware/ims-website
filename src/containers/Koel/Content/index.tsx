import ContainedButton from '@components/Button/ContainedButton';
import { ContentTitleDivider } from '@components/Dividers';
import { Box, BoxProps, Divider, Typography, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface KoelShowcaseProps extends BoxProps {
  title?: string;
  sloganHTML?: string;
  descriptionHTML?: string;
  button?: {
    buttonText: string;
    link?: string;
    onClick?: () => void;
  };
};

const Content: React.FC<KoelShowcaseProps> = ({
  title,
  sloganHTML,
  descriptionHTML,
  button,
  ...props
}) => {
  return (
    <Box {...props}>
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
    </Box>
  )
};

export default styled(Content)(({ theme }) => ({
  height: 'max-content',
  width: '50%',
  margin: 'auto 0',

  [theme.Breakpoints.down('lg')]: {
    width: '100%',
    gridColumn: '10 / 20',
    gridRow: '9 / 20',
  },

  [theme.Breakpoints.down('md')]: {
    gridColumn: '2 / 20',
    gridRow: '9 / 21',
  },
}));