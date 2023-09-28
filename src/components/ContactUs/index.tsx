import React, { useState } from 'react';
import { ContactTextProps } from '@interfaces/TypographyProps';
import { Snackbar, Typography, styled } from '@mui/material';
import SocialSection from './SocialSection';
import TitleText from '@components/Texts/TitleText';

const ContactTitle = styled(TitleText)(({ theme }) => ({
  whiteSpace: 'nowrap',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
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

export interface ContactUsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
};

const Contact: React.FC<ContactUsProps> = (props) => {

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

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
    <section {...props}>
      <ContactTitle>Contact Us</ContactTitle>
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
    </section>
  )
};

export default styled(Contact)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  alignItems: 'flex-start',
}));