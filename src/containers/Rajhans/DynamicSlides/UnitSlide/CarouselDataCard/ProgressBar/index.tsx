import { styled } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ProgressBar = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  height: '100%',
  zIndex: -1,
  backgroundColor: theme.palette.background.default,
  borderBottom: `0.125rem solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[1],
  transition: theme.Transitions.createTransition({
    property: 'box-shadow',
    duration: 'shortest',
  }),
}));

const DynamicProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState('0%');

  useEffect(() => {
    const splideProgressBar = document.getElementById('splide-progress-bar');

    const handleMutation = () => {
      if (splideProgressBar) {
        const width = getComputedStyle(splideProgressBar).width;
        setProgressWidth(width);
      }
    };

    if (splideProgressBar) {
      const mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(splideProgressBar, { attributes: true, attributeFilter: ['style'] });

      return () => {
        mutationObserver.disconnect();
      };
    }
  }, []);

  return <ProgressBar style={{ width: progressWidth }} className='carousel-data-card__progress-bar' />;
};

export default DynamicProgressBar;
