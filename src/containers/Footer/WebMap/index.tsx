import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { useNavMapContext } from '@helpers/NavMapProvider';

interface WebMapProps extends BoxProps {
};

const WebMap: React.FC<WebMapProps> = (props) => {
  const { data } = useNavMapContext();

  return (
    <Box
      component='section'
      {...props}
    >
      {data?.map((item, index) => (
        <Box
          component='ul'
          key={index}
        >
          {item.title}
        </Box>
      ))}
    </Box>
  )
};

export default styled(WebMap)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '3 / 13',
  border: '1px solid blue'
}));