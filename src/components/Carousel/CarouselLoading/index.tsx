import { Box, BoxProps, Skeleton, Typography, styled } from '@mui/material';
import React from 'react';

const DataCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'absolute',
  height: '12rem',
  width: '25rem',
  bottom: '7.5rem',
  left: '12rem',
  borderRadius: '1.5rem',
  boxShadow: theme.shadows[2],
  padding: theme.Spaces.md + ' ' + theme.Spaces.lg,

  [theme.breakpoints.down('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
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
          marginRight: '1rem'
        }}
      />
      <Skeleton variant="rectangular" height="100%" width="100%" />
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
        <Typography variant="body2" >
          <Skeleton variant="text" height="100%" width="8rem" />
        </Typography>
        <Typography variant="h2" mb='0.5rem'>
          <Skeleton variant="text" height="100%" width="100%" />
        </Typography>
        <Skeleton
          variant="rectangular"
          height="4rem"
          width="100%"
          sx={{ borderRadius: '0.5rem' }}
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