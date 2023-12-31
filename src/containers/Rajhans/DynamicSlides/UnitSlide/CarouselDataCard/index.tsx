import { CarouselDataCardProps } from "@interfaces/CardProps";
import { Card, alpha, styled } from "@mui/material";
import React from "react";
import ProgressBar from "./ProgressBar";
import SloganText from "@components/Texts/SloganText";
import TitleText from "@components/Texts/TitleText";
import BodyText from "@components/Texts/BodyText";

const CarouselDataCard: React.FC<CarouselDataCardProps> = ({
  link,
  tagline,
  title,
  description,
  pauseTime,
  splide,
  ...props
}) => {

  return (
    <Card
      {...props}
      elevation={0}
      className={props.className + ' carousel-data-card'}
      data-splide-interval={pauseTime}
      onMouseEnter={() => { splide?.Components.Autoplay.pause() }}
      onMouseLeave={() => splide?.Components.Autoplay.play()}
      component={link ? 'a' : 'div'}
      href={link}
    >
      <SloganText>{tagline}</SloganText>
      <TitleText>{title}</TitleText>
      <BodyText sx={{ my: 3 }} >{description}</BodyText>
      <ProgressBar />
    </Card>
  )
};

export default styled(CarouselDataCard)<CarouselDataCardProps>(({ theme }) => ({
  position: 'absolute',
  bottom: 50,
  left: 50,
  right: 0,
  height: 'max-content',
  width: 'max-content',
  maxWidth: '30rem',
  padding: theme.Spaces.md,
  backgroundColor: alpha(theme.palette.background.default, 0.75),
  boxShadow: theme.shadows[4],
  backdropFilter: 'blur(0.5rem)',
  overflow: 'hidden',
  zIndex: theme.Shadows.higher.zIndex,
  transition: theme.Transitions.createTransition([
    {
      property: 'transform',
      duration: 'shortest',
    }, {
      property: 'background-color',
      duration: 'short',
    }
  ]),
  transform: 'translateY(200%)',

  '&:hover': {
    backgroundColor: theme.palette.background.default,

    '& .carousel-data-card__progress-bar': {
      boxShadow: 'none' + ' !important',
    },
  },

  '@media (max-width: 1024px)': {
    width: '100%',
    left: 0,
    margin: '0 auto',
    transform: 'translate(0%, 200%)',
  },

  [theme.breakpoints.down('md')]: {
    left: '50%',
    transform: 'translate(-50%, 200%)',
  },

  [theme.breakpoints.down('sm')]: {
    width: `calc(100% - 2 * ${theme.Spaces.md})`,
    margin: '0 auto',
  },
}));