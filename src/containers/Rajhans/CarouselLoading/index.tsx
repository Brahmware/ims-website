import { Box, BoxProps, Skeleton, Typography, styled } from '@mui/material';
import React from 'react';

const DataCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'absolute',
  height: '18rem',
  width: '30rem',
  bottom: '7.5rem',
  left: '12rem',
  borderRadius: '0.25rem',
  boxShadow: theme.shadows[2],
  padding: theme.Spaces.lg + ' ' + theme.Spaces.md,

  [theme.breakpoints.down('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
  },

  [theme.breakpoints.down('sm')]: {
    width: `calc(100% - ${theme.Spaces.md} - ${theme.Spaces.md})`,
  },
}));

const CarouselLoading: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Skeleton
        className="carousel-loading-left"
        variant="rectangular"
        height="100%"
        width="10rem"
        sx={{
          animationDelay: '1.5s',
          mr: '1rem'
        }}
      />
      <Skeleton
        variant="rectangular"
        height="100%"
        width="100%"
      />
      <Skeleton
        className="carousel-loading-right"
        variant="rectangular"
        height="100%"
        width="10rem"
        sx={{
          animationDelay: '1s',
          marginLeft: '1rem'
        }}
      />
      <DataCard>
        <Typography variant="h2" >
          <Skeleton
            variant="text"
            animation="wave"
            height="100%"
            width="10rem"
          />
        </Typography>
        <Typography variant="h1" mb='0.75rem'>
          <Skeleton
            variant="text"
            animation="wave"
            height="100%"
            width="100%"
          />
        </Typography>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ 
            borderRadius: '0.5rem',
            height: '7rem',
            width: '100%',

            '@media (max-width: 511px)': {
              height: '8rem',
            },
          }}
        />
      </DataCard>
    </Box>
  )
};

export default styled(CarouselLoading)(({ theme }) => ({
  height: '100dvh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  '@media (max-width: 1024px)': {
    '& .carousel-loading-left, & .carousel-loading-right': {
      display: 'none',
    },
  },
}));