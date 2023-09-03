import { CarouselData } from "@components/Carousel/carouselData";
import { CarouselCardProps } from "@interfaces/CardProps";
import { Card, alpha, styled } from "@mui/material";
import { navbar } from "@theme/constants";
import React from "react";
import ProgressBar from "../ProgressBar";

interface CarouselDataCardProps extends CarouselCardProps {
  link: CarouselData['link'];
  title: CarouselData['title'];
  description: CarouselData['description'];
  pauseTime: CarouselData['pauseTime'];
  active?: boolean;
  splide?: any;
};

const CarouselDataCard: React.FC<CarouselDataCardProps> = ({ link, title, description, active, pauseTime, splide, ...props }) => {

  const [pauseProgress, setPauseProgress] = React.useState(false);
  const [progressComplete, setProgressComplete] = React.useState(false);

  React.useEffect(() => {
    if (progressComplete) {
      splide.go('>');
    }
  }, [progressComplete, splide]);

  return (
    <Card
      {...props}
      elevation={navbar.elevationMedium}
      onMouseEnter={() => {
        setPauseProgress(true);
      }}
      onMouseLeave={() => {
        setPauseProgress(false);
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      {active &&
        <ProgressBar
          pause={pauseProgress}
          totalSpan={pauseTime}
          setProgressComplete={setProgressComplete}
        />
      }
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
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  backdropFilter: 'blur(0.25rem)',
  color: theme.palette.text.primary,
  transition: theme.Transitions.createTransition({
    property: 'transform',
    duration: 'shortest',
  }),
  transform: active ? 'translateY(0)' : 'translateY(200%)',
}));