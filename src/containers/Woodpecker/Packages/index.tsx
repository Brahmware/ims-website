import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { Package } from '..';
import UnitPackage from './UnitPackage';

interface PackagesProps extends BoxProps {
  packages?: Package[];
  children?: React.ReactNode;
};

const Packages: React.FC<PackagesProps> = ({
  packages,
  ...props
}) => {
  return (
    <Box {...props} >
      {packages?.map((item) => (
        <React.Fragment key={item.id}>
          <UnitPackage
            gridTemplateRows={`
              1fr 
              repeat(${item.features.length}, 0.75fr)
            `}
            packageInfo={item}
          />
        </React.Fragment>
      ))}
    </Box>
  )
};

export default styled(Packages)(({ theme }) => ({
  width: '100%',
  paddingTop: theme.Spaces.lg,
  display: 'flex',
  justifyContent: 'space-around',

  '@media (max-width: 1400px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 0,
  },
}));