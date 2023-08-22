import React from 'react';
import { Button, Typography, styled } from '@mui/material';
import TranslationIcon from '@icons/utility/TranslationIcon';
import TranslationMenu from './TranslationMenu';

const LocaleButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightRegular,
  borderRadius: '2rem',
  padding: `${theme.Spaces.xs} ${theme.Spaces.lg} ${theme.Spaces.xs} ${theme.Spaces.md}`,
  marginLeft: theme.Spaces.sm,

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,

    '& svg': {
      '& *': {
        fill: theme.palette.secondary.contrastText + ' !important',
      },
    },

    '& .MuiTypography-root': {
      color: theme.palette.secondary.contrastText,
    },
  },
}));

const LocaleIcon = styled(TranslationIcon)(({ theme }) => ({
  width: '1.65rem',
  height: '1.65rem',
  marginRight: theme.Spaces.sm,
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: '0.875rem',
  color: theme.palette.error.contrastText,
  cursor: 'pointer',
}));

const Locale = () => {

  const [localeMenuOpen, setLocaleMenuOpen] = React.useState(false);

  const handleLocaleButtonOnClick = () => {
    setLocaleMenuOpen(!localeMenuOpen);
  };

  return (
    <React.Fragment>
      <LocaleButton
        disableElevation
        variant="contained"
        color="error"
        onClick={handleLocaleButtonOnClick}
      >
        <LocaleIcon />
        <ButtonText>
          Eng IN
        </ButtonText>
      </LocaleButton>
      <TranslationMenu
        open={localeMenuOpen}
        onClose={() => setLocaleMenuOpen(false)}
      />
    </React.Fragment>
  )
}

export default Locale