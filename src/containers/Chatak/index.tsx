import React from 'react';
import { Darshan } from '@datatypes/Darshan';
import { Box, BoxProps, styled } from '@mui/material';
import PhotoFrame from './PhotoFrame';
import BillBoard from './BillBoard';

interface ChatakProps extends BoxProps {
  countDown?: number;
  transitionTime?: number;
};

const Chatak: React.FC<ChatakProps> = ({
  countDown = 1000,
  transitionTime = 500,
  ...props
}) => {
  const [data, setData] = React.useState<Darshan[]>({} as Darshan[]);

  const fetchData = React.useCallback(async () => {
    const response = await fetch('/api/website/bharat-darshan');
    console.log(response);
    const data = await response.json();
    setData(data);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box {...props}>
      <PhotoFrame 
        src='/images/bharat-darshan/hungry-bengal.jpg'
        alt='Hungry Bengal'
      />
      <BillBoard />
    </Box>
  )
};

export default styled(Chatak)(({ theme }) => ({
  height: '100%',
  width: '100%',
  
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(20, 1fr)',
}));