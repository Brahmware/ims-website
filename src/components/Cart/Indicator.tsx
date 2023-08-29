import { Typography, styled } from '@mui/material';

const Indicator = styled(Typography)(({ theme }) => {

  const transformPos = Math.sqrt(2) / 2;

  return ({
    position: 'absolute',
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: theme.Sizes.icon.default.height,
    minWidth: theme.Sizes.icon.default.width,
    padding: theme.Spaces.xxs,
    aspectRatio: '1/1',
    fontSize: '0.6rem',
    alignSelf: 'flex-start',
    top: '0',
    right: '0',
    transform: `translate(40%, -40%)`,
  })
});

export default Indicator;