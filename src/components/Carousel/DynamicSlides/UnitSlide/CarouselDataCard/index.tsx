import { CarouselDataCardProps } from "@interfaces/CardProps";
import { Card, Typography, alpha, styled } from "@mui/material";
import React from "react";
import ProgressBar from "./ProgressBar";
import { TypographyProps } from "@interfaces/TypographyProps";


const Tagline = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.Spaces.xs,
  paddingLeft: theme.Spaces.xxs,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.Spaces.xs,
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.Spaces.xs,
  paddingLeft: theme.Spaces.xxs,
}));

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
      onMouseEnter={() => splide?.Components.Autoplay.pause()}
      onMouseLeave={() => splide?.Components.Autoplay.play()}
      component={link ? 'a' : 'div'}
      href={link}
    >
      <Tagline
        variant="body2"
        component="h3"
      >
        {tagline}
      </Tagline>
      <Title variant="h2">{title}</Title>
      <Description variant="body1">{description}</Description>
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
  minWidth: '25rem',
  maxWidth: '30rem',
  padding: theme.Spaces.md,
  backgroundColor: alpha(theme.palette.background.default, 0.75),
  boxShadow: theme.shadows[4],
  backdropFilter: 'blur(0.125rem)',
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

  [theme.breakpoints.down('md')]: {
    left: '50%',
    transform: 'translate(-50%, 200%)',
  },
}));