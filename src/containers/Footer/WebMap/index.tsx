import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { useNavMapContext } from '@helpers/NavMapProvider';
import UnitPagegroup from './UnitPagegroup';

interface WebMapProps extends BoxProps {
  children?: React.ReactNode;
};

const WebMap: React.FC<WebMapProps> = (props) => {
  const { data } = useNavMapContext();

  return (
    <Box
      component='section'
      {...props}
    >
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          <UnitPagegroup pageGroup={item} />
        </React.Fragment>
      ))}
    </Box>
  )
};

export default styled(WebMap)(({ theme }) => ({

  gridColumn: '11 / 21',
  gridRow: '1 / 14',
  alignSelf: 'end',
  alignItems: 'start',
  
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(2, 8rem)',
  
  '@media screen and (max-height: 1230px)': {
    gridRow: '1 / 16',
    alignSelf: 'center',
  },

  '@media screen and (max-height: 720px)': {
    gridRow: '1 / 16',
  },

  '@media screen and (max-width: 1360px)': {
    gridColumn: '13 / 21',
    gridRow: '1 / 15',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 8rem)',
  },
}));