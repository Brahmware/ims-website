import React from 'react';
import { Button, Typography, styled } from '@mui/material';
import TranslationIcon from '@icons/utility/TranslationIcon';
import TranslationMenu from './TranslationMenu';
import { useNavHoverContext } from '@helpers/NavHoverContext';
import { MediaTranslateMenuSrc, MediaWhiteNoiseSrc } from '@utils/const';
import { ButtonProps } from '@interfaces/ButtonProps';

const LocaleButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightRegular,
  borderRadius: '2rem',
  padding: `${theme.Spaces.xs} ${theme.Spaces.lg} ${theme.Spaces.xs} ${theme.Spaces.md}`,
  marginLeft: theme.Spaces.sm,
  boxShadow: theme.shadows[3],

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

  '@media (max-width: 660px)': {
    padding: 0,
    minWidth: 'unset',
    minHeight: 'unset',
    width: '3rem',
    height: '3rem',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.Spaces.xs,
  },

  '@media (max-width: 525px)': {
    transform: 'translateX(1.5px)',
  },

  '@media (max-width: 440px)': {
    marginTop: 0,
    width: '7rem',
    height: '2.5rem',
    boxShadow: 'none',
  }
}));

const LocaleIcon = styled(TranslationIcon)(({ theme }) => ({
  width: '1.65rem',
  height: '1.65rem',
  marginRight: theme.Spaces.sm,

  '@media (max-width: 660px)': {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: 0,
  },

  '@media (max-width: 440px)': {
    marginRight: theme.Spaces.xs,
  }
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: '0.875rem',
  color: theme.palette.error.contrastText,
  fontWeight: theme.typography.fontWeightRegular,
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  '@media (max-width: 660px)': {
    display: 'none',
  },

  '@media (max-width: 440px)': {
    marginTop: '0' + ' !important',
    display: 'block',
  }
}));

const Locale = () => {

  const [localeMenuOpen, setLocaleMenuOpen] = React.useState(false);
  const { setCurrentUrl } = useNavHoverContext();

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
        onMouseEnter={() => setCurrentUrl(MediaTranslateMenuSrc)}
        onMouseLeave={() => setCurrentUrl(MediaWhiteNoiseSrc)}
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