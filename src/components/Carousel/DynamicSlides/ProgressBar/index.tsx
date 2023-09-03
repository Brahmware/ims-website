import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

// Define component props
interface ProgressBarProps {
  pause: boolean;
  totalSpan?: number; // In milliseconds. Default is 5000. It is the total time for the progress bar to reach 100%
  setProgressComplete?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define styled components
const StyledProgressBar = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  backgroundColor: alpha(theme.palette.background.default, 0.25),
  zIndex: -1,
}));

const ProgressIndicator = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  zIndex: theme.zIndex.tooltip,
  transition: 'width 50ms linear',  // Making transition smooth
}));

const ProgressBar: React.FC<ProgressBarProps> = ({ pause, totalSpan = 5000, setProgressComplete }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (pause) {
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setProgressComplete && setProgressComplete(true);
          return 0;
        }
        return prevProgress + 1;
      });
    }, totalSpan / 100);
    
    return () => clearInterval(interval);
  }, [pause, totalSpan, setProgressComplete]);

  return (
    <StyledProgressBar>
      <ProgressIndicator style={{ width: `${progress}%` }} />
    </StyledProgressBar>
  );
}

export default ProgressBar;
