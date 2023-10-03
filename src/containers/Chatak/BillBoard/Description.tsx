import React from 'react';
import BodyText, { BodyTextProps } from '@components/Texts/BodyText';
import { alpha, styled } from '@mui/material';

const maxDescriptionLength = 200;

interface DescriptionProps extends BodyTextProps {
  children: string;
};

const Description: React.FC<DescriptionProps> = ({
  children: description,
  ...props
}) => {

  const randomId = Math.random().toString(36).substring(7);

  let descriptionShort = (description.length > maxDescriptionLength) ?
    description.slice(0, maxDescriptionLength) +
    `
      <span id="${randomId}">
        Read More
      </span>
    ` :
    description
    ;

  React.useEffect(() => {
    const handleReadMore = () => {
      window.alert('Read More');
    };

    const readMore = document.getElementById(randomId);
    if (readMore) {
      readMore.addEventListener('click', handleReadMore);
    }

    return () => {
      if (readMore) {
        readMore.removeEventListener('click', handleReadMore);
      }
    }
  }, [randomId]);

  return (
    <BodyText
      dangerouslySetInnerHTML={{ __html: descriptionShort }}
      {...props}
    />
  )
};

export default styled(Description)(({ theme }) => ({
  textAlign: 'start',
  color: 'inherit',

  '& span': {
    background: `
      linear-gradient(
        90deg, 
        ${alpha(theme.Colors.matmaila, 0)} 0%, 
        ${alpha(theme.Colors.matmaila, 1)} 20%,
        ${alpha(theme.Colors.matmaila, 1)} 100%
      )
    `,
    cursor: 'pointer',
    padding: '0 ' + theme.Spaces.xxs,
    paddingLeft: theme.Spaces.lg,
    marginLeft: '-' + theme.Spaces.lg,
    lineHeight: 'inherit',
    fontSize: '0.85rem',
    color: alpha(theme.Colors.bhasma, 0.5),
    fontWeight: theme.typography.fontWeightMedium,

    transition: theme.Transitions.createTransition({
      property: 'color',
      duration: 'shorter',
      easing: 'easeIn',
    }),

    '&:hover': {
      color: alpha(theme.Colors.bhasma, 0.75),
    }
  }
}));