import Link from '@components/Link';
import { useNavHoverContext } from '@helpers/NavHoverContext';
import { alpha, styled } from '@mui/material';
import { MediaPrivacyPolicySrc} from '@utils/const';
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

  '& *': {
    textShadow: `${alpha(theme.Colors.black, 0.25)} 1px 0 10px`,
  },

  '& a': {
    '&:first-child': {
      marginRight: theme.Spaces.xs,
    },

    '&:last-child': {
      marginRight: 0,
      marginLeft: theme.Spaces.xs,
    }
  },

  '@media (max-width: 736px)': {
    gridColumn: '1 / 25',
    gridRow: '24 / 25',
    justifyContent: 'start',
  },

  '@media (max-width: 440px)': {
    justifyContent: 'center',
  }
}));

const Legal = () => {

  const { setCurrentUrl, resetCurrentUrl } = useNavHoverContext();

  return (
    <LegalSection
      onMouseEnter={() => setCurrentUrl(MediaPrivacyPolicySrc)}
      onMouseLeave={resetCurrentUrl}
    >
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