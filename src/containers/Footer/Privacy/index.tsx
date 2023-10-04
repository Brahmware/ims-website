import React from 'react';
import { BoxProps, Box, styled } from '@mui/material';
import Link from '@components/Link';

const StyledLink = styled(Link)(({ theme }) => ({
  margin: theme.Spaces.xxs + ' ' + theme.Spaces.md,
  marginRight: 0,

  '&:first-of-type': {
    marginLeft: 0,
  },
}));

interface PrivacyProps extends BoxProps {
  children?: React.ReactNode;
};

const Privacy: React.FC<PrivacyProps> = (props) => {
  return (
    <Box {...props}>
      <StyledLink href='legal/visitor-agreement'>
        Visitor Agreement
      </StyledLink>
      <StyledLink href="legal/privacy-notice">
        Privacy Notice
      </StyledLink>
      <StyledLink href="legal/website-accessibility-statement">
        Website Accessibility Statement
      </StyledLink>
      <StyledLink href="legal/code-of-ethics">
        Code of Ethics
      </StyledLink>
      <StyledLink href="legal/faqs">
        FAQs
      </StyledLink>
    </Box>
  )
};

export default styled(Privacy)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '20 / 21',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'end',

  '@media screen and (max-width: 1460px)': {
    gridColumn: '10 / 21',
  },

  '@media screen and (max-width: 1320px)': {
    gridColumn: '9 / 21',
  },

  '@media screen and (max-width: 1236px)': {
    gridRow: '19 / 21',
    gridColumn: '11 / 21',

    flexWrap: 'wrap',
    justifyContent: 'end',
    height: 'max-content',
    
    '@media screen and (max-height: 820px)': {
      marginTop: theme.Spaces.sm,
    },
  },

  '@media screen and (max-width: 960px)': {
    gridColumn: '2 / 20',
    gridRow: '11 / 12',
    justifyContent: 'center',
    alignSelf: 'center',
  },

}));