import { CarouselData } from "@components/Carousel/carouselData";
import { CarouselCardProps } from "@interfaces/CardProps";
import { Card, alpha, styled } from "@mui/material";
import { navbar } from "@theme/constants";
import React from "react";
import ProgressBar from "../ProgressBar";

interface CarouselDataCardProps extends CarouselCardProps {
  link: CarouselData['link'];
  tagline: CarouselData['tagline'];
  title: CarouselData['title'];
  description: CarouselData['description'];
  pauseTime: CarouselData['pauseTime'];
  active?: boolean;
  splide?: any;
};

const CarouselDataCard: React.FC<CarouselDataCardProps> = ({ link, tagline, title, description, active, pauseTime, splide, ...props }) => {

  return (
    <Card
      {...props}
      elevation={navbar.elevationMedium}
    >
      <h3>{tagline}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
      {active && <ProgressBar />}
    </Card>
  )
};

export default styled(CarouselDataCard)<CarouselDataCardProps>(({ theme, active }) => ({
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
  transform: active ? 'translateY(0)' : 'translateY(200%)',
  borderRadius: '1.618rem'
}));