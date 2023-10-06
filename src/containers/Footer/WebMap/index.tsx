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

  '@media screen and (max-width: 1180px)': {
    gridColumn: '16 / 21',
    gridRow: '2 / 18',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'unset',
    paddingLeft: theme.Spaces.lg,
    transform: 'translateY(0.33rem)',

    '& > ul': {
      marginBottom: '0.48rem',

      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },

  '@media screen and (max-width: 960px)': {
    paddingLeft: 0,
    transform: 'translateY(0)',
    
    gridColumn: '1 / 21',
    gridRow: '3 / 4',

    gridTemplateColumns: 'repeat(3, 1fr)',

    border: '0.01px solid ' + theme.palette.divider,
    '& > ul': {
      height: '100%',
      border: '0.01px solid ' + theme.palette.divider,
      padding: theme.Spaces.sm,
      backgroundColor: theme.palette.background.paper,
    }
  },

  '@media screen and (max-width: 700px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media screen and (max-width: 510px)': {
    gridTemplateColumns: '1fr',
  },

  '@media screen and (max-width: 426px)': {
    border: 0,
    justifyContent: 'center',
    '& > ul': {
      border: 0,
      padding: 0,
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingBottom: theme.Spaces.sm,

      '&:last-of-type': {
        paddingBottom: 0,
      },
    }
  },
}));