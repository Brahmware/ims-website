import { ContactTextProps, ContactTitleprops } from '@interfaces/TypographyProps';
import { Snackbar, Typography, alpha, styled } from '@mui/material'
import React, { useState } from 'react'
import SocialSection from './SocialSection';
import { useNavHoverContext } from '@helpers/NavHoverContext';

const ContactSection = styled('section')(({ theme }) => ({
  gridColumn: '1/6',
  gridRow: '19/24',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  alignItems: 'flex-start',
  width: '100%',
  zIndex: theme.Shadows.medium.zIndex,

  '& *': {
    textShadow: `${alpha(theme.Colors.black, 0.25)} 1px 0 10px`,
  },

  '@media (max-width: 820px)': {
    gridColumn: '1 / 25',
    gridRow: '10 / 23',
    justifyContent: 'start',
  },

  '@media (max-width: 440px)': {
    gridColumn: '1 / 25',
    gridRow: ' 19 / 21',
    justifyContent: 'start',
  }
}));

const ContactTitle = styled(Typography)<ContactTitleprops>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
  whiteSpace: 'nowrap',
}));

const EmailString = styled(Typography)<ContactTextProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  transition: theme.Transitions.createTransition({ property: 'color' }),
  whiteSpace: 'nowrap',
}));

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2em',
    padding: `0 ${theme.Spaces.sm}`,
    fontWeight: theme.typography.fontWeightMedium,
  }
}));

const anchorOrigin: any = {
  vertical: 'bottom',
  horizontal: 'center',
};


const Contact = () => {

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { setCurrentUrl, resetCurrentUrl } = useNavHoverContext();

  const handleCopyToClipboard = () => {
    try {
      const isSupported = navigator.clipboard && navigator.clipboard.writeText;
      if (!isSupported) {
        throw new Error('Copy to clipboard not supported');
      }

      const textCoppied = navigator.clipboard.writeText("namaste@indianmediasyndicate.com");
      if (!textCoppied) {
        throw new Error('Text not coppied');
      }
      setIsSnackbarOpen(true);

    } catch (error) {
      setIsSnackbarOpen(false);
    };
  };

  return (
    <ContactSection
      onMouseEnter={() => setCurrentUrl('/videos/navmenu/contact-us.webm')}
      onMouseLeave={resetCurrentUrl}
    >
      <ContactTitle component='h4' variant='h4'>CONTACT US</ContactTitle>
      <EmailString
        component='h2'
        variant='body1'
        onClick={handleCopyToClipboard}
      >
        namaste@indianmediasyndicate.com
      </EmailString>
      <SocialSection />
      <StyledSnackbar
        open={isSnackbarOpen}
        message='Email copied to clipboard'
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={anchorOrigin}
        autoHideDuration={2000}
      />
    </ContactSection>
  )
}

export default Contact