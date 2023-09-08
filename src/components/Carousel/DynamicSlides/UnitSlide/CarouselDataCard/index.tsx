import { CarouselData } from "@components/Carousel/carouselData";
import { CarouselCardProps } from "@interfaces/CardProps";
import { Card, Typography, alpha, styled } from "@mui/material";
import { navbar } from "@theme/constants";
import React from "react";
import ProgressBar from "./ProgressBar";

interface CarouselDataCardProps extends CarouselCardProps {
  link: CarouselData['link'];
  tagline: CarouselData['tagline'];
  title: CarouselData['title'];
  description: CarouselData['description'];
  pauseTime: CarouselData['pauseTime'];
  splide?: any;
};

const Tagline = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.Spaces.xs,
  letterSpacing: theme.spacing(0.25),
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
      elevation={navbar.elevationMedium}
      className={props.className + ' carousel-data-card'}
    >
      <Tagline variant="body2">{tagline}</Tagline>
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
  padding: theme.Spaces.md,
  backgroundColor: alpha(theme.palette.background.default, 0.65),
  backdropFilter: 'blur(0.125rem)',
  color: theme.palette.text.primary,
  overflow: 'hidden',
  zIndex: theme.Shadows.higher.zIndex,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shortest',
  }),
  transform: 'translateY(200%)',
}));