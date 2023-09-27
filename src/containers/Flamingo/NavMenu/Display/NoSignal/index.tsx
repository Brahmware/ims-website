import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material';
import { useNavigationMenuState } from '@helpers/NavigationMenuStateProvider';

interface NoSignalProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  children?: React.ReactNode;
};

const NoSignal: React.FC<NoSignalProps> = (props) => {
  const { isOpen } = useNavigationMenuState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isOpen) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const renderNoise = () => {
      const { width, height } = canvas;
      const imageData = context.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }
      context.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      if (isOpen) {
        renderNoise();
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isOpen]);

  return isOpen ? <canvas ref={canvasRef} {...props} /> : null;
};

export default styled(NoSignal)(({ theme }) => ({
  position: 'absolute',
  width: 380,
  height: 324,
  zIndex: -2,
  objectFit: 'cover',
  transform: 'scale(0.6) translateX(-7rem) translateY(-2.5rem)',
}));
