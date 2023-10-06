import React from 'react';
import { Darshan } from '@datatypes/Darshan';
import { Box, BoxProps, styled } from '@mui/material';
import PhotoFrame from './PhotoFrame';
import BillBoard from './BillBoard';

const StyledDivider = styled(Box)(({ theme }) => ({
  gridColumn: '6 / 16',
  gridRow: '20 / 21',
  alignSelf: 'end',
  height: '1px',
  width: '100%',
  backgroundColor: theme.palette.divider,

  '@media screen and (min-width: 761px)': {
    display: 'none',
  },
}));

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

  const [active, setActive] = React.useState<boolean>(true);

  return (
    <Box {...props}>
      <PhotoFrame 
        src='/images/bharat-darshan/hungry-bengal.jpg'
        alt='Hungry Bengal'
      />
      <BillBoard active={active}/>
      <StyledDivider />
    </Box>
  )
};

export default styled(Chatak)(({ theme }) => ({
  height: '100%',
  width: '100%',
  
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(20, 1fr)',
  
  '@media screen and (max-width: 760px)': {
    gridTemplateRows: `repeat(20, 3rem)`,
  },

  '@media screen and (max-width: 510px)': {
    gridTemplateRows: `repeat(20, 2.6rem)`,
  },

  '@media screen and (max-width: 470px)': {
    gridTemplateRows: `repeat(20, 2.4rem)`,
  },

  '@media screen and (max-width: 420px)': {
    gridTemplateRows: `repeat(20, 2.2rem)`,
  },

  '@media screen and (max-width: 400px)': {
    gridTemplateRows: `repeat(20, 2rem)`,
  },
}));