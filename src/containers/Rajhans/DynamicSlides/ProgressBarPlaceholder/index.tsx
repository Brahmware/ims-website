import React from 'react';

const ProgressBarPlaceholder = () => {

  return (
    <div
      className="splide__progress"
      style={{ display: 'none' }}
    >
      <div
        className="splide__progress__bar"
        id='splide-progress-bar'
      />
    </div>
  );
};

export default ProgressBarPlaceholder;
