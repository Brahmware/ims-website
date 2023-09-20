import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  target: RefObject<Element>;
  onIntersect: () => void;
  onNoIntersect: () => void;
  threshold?: number;
}

function useIntersectionObserver({
  target,
  onIntersect,
  onNoIntersect,
  threshold = 0.1,
}: UseIntersectionObserverProps) {
  useEffect(() => {
    const currentTarget = target.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        } else {
          onNoIntersect();
        }
      },
      {
        threshold,
      },
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [target, onIntersect, onNoIntersect, threshold]);
}

export default useIntersectionObserver;
