import { useState, useEffect, RefObject } from 'react';

interface UseTouchSwipeOptions {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

const useTouchSwipe = (
  { onSwipeUp, onSwipeDown, threshold = 50 }: UseTouchSwipeOptions,
  targetRef: RefObject<HTMLElement>
) => {
  const [startY, setStartY] = useState<number | null>(null);

  useEffect(() => {
    const targetElement = targetRef.current;
    
    if (!targetElement) {
      return;
    }

    const handleTouchStart = (event: TouchEvent) => {
      setStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (startY !== null) {
        const deltaY = startY - event.touches[0].clientY;
        if (deltaY > threshold) {
          onSwipeUp && onSwipeUp();
        } else if (deltaY < -threshold) {
          onSwipeDown && onSwipeDown();
        }
        setStartY(null);
      }
    };

    targetElement.addEventListener('touchstart', handleTouchStart);
    targetElement.addEventListener('touchmove', handleTouchMove);

    return () => {
      targetElement.removeEventListener('touchstart', handleTouchStart);
      targetElement.removeEventListener('touchmove', handleTouchMove);
    };
  }, [startY, onSwipeUp, onSwipeDown, threshold, targetRef]);
};

export default useTouchSwipe;
