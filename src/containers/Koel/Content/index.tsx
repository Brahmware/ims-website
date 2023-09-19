import React from 'react';
import ContainedButton from '@components/Button/ContainedButton';
import { ContentTitleDivider } from '@components/Dividers';
import BodyText from '@components/Texts/BodyText';
import SloganText from '@components/Texts/SloganText';
import TitleText from '@components/Texts/TitleText';
import { Box, BoxProps, styled } from '@mui/material';
import Link from 'next/link';

export interface KoelShowcaseProps extends BoxProps {
  direction?: 'ltr' | 'rtl';
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
  direction,
  title,
  sloganHTML,
  descriptionHTML,
  button,
  ...props
}) => {
  return (
    <Box {...props}>
      <SloganText> {title} </SloganText>
      <TitleText dangerouslySetInnerHTML={{ __html: sloganHTML || '' }} />
      <ContentTitleDivider sx={{ my: 3 }} />
      <BodyText
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

export default styled(Content)(({ theme, direction = 'ltr' }) => ({
  height: 'max-content',
  width: '50%',
  margin: 'auto 0',

  [theme.Breakpoints.down('lg')]: {
    width: '100%',
    gridColumn: (direction === 'ltr') ? '10 / 20' : '-10 / -20',
    gridRow: '9 / 20',
  },

  [theme.Breakpoints.down('md')]: {
    gridColumn: '2 / 20',
    gridRow: '9 / 21',
  },

  '@media (max-width: 555px)': {
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
  },
}));