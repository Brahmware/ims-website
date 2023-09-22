import React from 'react';
import { styled, useTheme } from '@mui/material';
import { ContentTitleDivider } from '@components/Dividers';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';
import TitleText from '@components/Texts/TitleText';
import SloganText from '@components/Texts/SloganText';
import BodyText from '@components/Texts/BodyText';

type updown = 'up' | 'down';

type Heading = {
  title?: string;
  slogan?: string;
  description?: string;
};

type Button = {
  buttonText?: string;
  link?: string;
  onClick?: () => void;
};

export interface MalkohaProps {
  updown?: updown;
  children?: React.ReactNode;
  heading: Heading;
  button?: Button;
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
  heading: {
    title,
    slogan: sloganHTML,
    description: descriptionHTML,
  },
  button,
  ...props
}) => {

  const mediumWidth = useTheme().Breakpoints.values.md;
  return (
    <Section updown={updown}>
      <div {...props} >
        <SloganText> {title} </SloganText>
        <TitleText dangerouslySetInnerHTML={{ __html: sloganHTML || '' }} />
        <ContentTitleDivider sx={{ my: 3 }} />
        {
          descriptionHTML && (
            <BodyText
              sx={{ maxWidth: mediumWidth }}
              dangerouslySetInnerHTML={{ __html: descriptionHTML || '' }}
            />
          )
        }
        {props.children}
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