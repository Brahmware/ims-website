import { Card, alpha, styled } from "@mui/material";

const CarouselDataCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  bottom: 50,
  left: 50,
  right: 0,
  height: 'max-content',
  width: 'max-content',
  minWidth: '25rem',
  padding: theme.Spaces.md,
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  backdropFilter: 'blur(0.25rem)',
  color: theme.palette.text.primary,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shortest',
  }),
}));

export default CarouselDataCard;