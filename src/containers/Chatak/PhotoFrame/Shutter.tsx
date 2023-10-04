import BaaghIcon from '@icons/utility/BaaghIcon';
import { styled } from '@mui/material';
import React from 'react';

const HalfShutter = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '50.25%',
  width: '100%',
  backgroundColor: theme.Colors.bhasma,
  transition: theme.Transitions.createTransition({
    duration: 'medium',
    easing: 'easeIn',
    property: 'transform',
  }),
  zIndex: 2,
  transform: 'translateY(0)',

  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const UpperHalf = styled(HalfShutter)({
  top: 0,
  alignItems: 'flex-end',
  
  '&.open': {
    transform: 'translateY(-100%)',
  },

  '& .shutter__icon': {
    transform: 'translateY(50%)',
  },
});

const LowerHalf = styled(HalfShutter)({
  top: '50%',
  alignItems: 'flex-start',
  
  '&.open': {
    transform: 'translateY(100%)',
  },
  
  '& .shutter__icon': {
    transform: 'translateY(-50%)',
  },
});

const StyledBaghIcon = styled(BaaghIcon)(({ theme }) => ({
  height: '50%',
  width: '50%',
}));

interface ShutterProps {
  open?: boolean;
};

const Shutter: React.FC<ShutterProps> = ({
  open
}) => {
  return (
    <React.Fragment>
      <UpperHalf className={`shutter ${open ? 'open' : ''}`}>
        <StyledBaghIcon className='shutter__icon' />
      </UpperHalf>
      <LowerHalf className={`shutter ${open ? 'open' : ''}`}>
        <StyledBaghIcon className='shutter__icon' />
      </LowerHalf>
    </React.Fragment>
  )
};

export default Shutter;