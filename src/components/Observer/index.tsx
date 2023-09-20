import { styled } from '@mui/material';
import useIntersectionObserver from '@utils/hooks/useInterSectionObserver';
import React from 'react';

interface ObserverProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onIntersect?: () => void;
  onNoIntersect?: () => void;
};

const Observer: React.FC<ObserverProps> = ({
  onIntersect = () => { },
  onNoIntersect = () => { },
  ...props
}) => {

  const observerRef = React.useRef<HTMLDivElement>(null);
  useIntersectionObserver({
    target: observerRef,
    onIntersect,
    onNoIntersect,
  })

  return (
    <div
      ref={observerRef}
      {...props}
    >
      {props.children}
    </div>
  )
};

export default styled(Observer)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));