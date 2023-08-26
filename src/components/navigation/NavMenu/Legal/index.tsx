import Link from '@components/Link';
import { styled } from '@mui/material';
import React from 'react'

const LegalSection = styled('section')(({ theme }) => ({
  gridColumn: '17 / 25',
  gridRow: '25 / 26',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  fontSize: '1rem',
  zIndex: theme.Shadows.medium.zIndex,

  '& a': {
    '&:first-child': {
      marginRight: theme.Spaces.xs,
    },

    '&:last-child': {
      marginRight: 0,
      marginLeft: theme.Spaces.xs,
    }
  }
}));

const Legal = () => {
  return (
    <LegalSection>
      <Link href="legal/visitor-agreement">
        Visitor Agreement
      </Link>
      <Link href="legal/privacy-notice">
        Privacy Notice
      </Link>
    </LegalSection>
  )
}

export default Legal