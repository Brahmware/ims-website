import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import ContainedButton from '@components/Button/ContainedButton';
import BodyText from '@components/Texts/BodyText';
import TitleText from '@components/Texts/TitleText';
import Link from 'next/link';

const Headline = styled(BodyText)(({ theme }) => ({
  paddingLeft: theme.spacing(0.5),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  fontWeight: theme.FontWeights.fontWeightBlack,
  color: theme.Colors.white,
}));

const Title = styled(TitleText)(({ theme }) => ({
  fontWeight: theme.FontWeights.fontWeightUltra,
  color: theme.Colors.white,
  padding: theme.Spaces.lg + ' 0',
}));

type Button = {
  buttonText?: string;
  link?: string;
  onClick?: () => void;
};

export interface AdsContentProps extends BoxProps {
  headline?: string;
  slogan?: string;
  button?: Button;
};

const AdsContent: React.FC<AdsContentProps> = ({
  headline,
  slogan,
  button,
  ...props
}) => {
  return (
    <Box {...props}>
      <Headline>
        {headline}
      </Headline>
      <Title dangerouslySetInnerHTML={{ __html: slogan || '' }} />
      {
        button && (
          button.link ? (
            <ContainedButton
              flipped
              color="secondary"
              aria-label={button.buttonText}
              vocab={button.buttonText}
              sx={{ my: 3 }}
              component={Link}
              href={button.link}
            >
              {button.buttonText}
            </ContainedButton>
          ) : (
            <ContainedButton
              flipped
              color="secondary"
              aria-label={button.buttonText}
              vocab={button.buttonText}
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
}

export default styled(AdsContent)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  width: '100%',
  height: '100%',
  padding: '0 ' + theme.Spaces.md,

  position: 'absolute',
  zIndex: 2,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',

  '@media (max-width: 1400px)': {
    alignItems: 'center',

    '& > *': {
      textAlign: 'center',
    },
  },
}))