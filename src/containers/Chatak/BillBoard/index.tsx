import React from 'react';
import BodyText from '@components/Texts/BodyText';
import { Box, BoxProps, styled } from '@mui/material';

const BillboardText = styled(BodyText)(({ theme }) => ({
  textAlign: 'start',
  color: 'inherit',
}));

interface BillBoardProps extends BoxProps {
  active?: boolean;
  transitionTime?: number;
};

const BillBoard: React.FC<BillBoardProps> = ({
  active,
  transitionTime = 500,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{ transition: active ? `transform ${transitionTime}ms ease-in-out` : 'none' }}
    >
      <BillboardText
        dangerouslySetInnerHTML={{
          __html: `
          Lorem ipsum dolor sit amet co nsectetur adipisicing elit. Quisquam, voluptate.
          dolor sit amet co nsectetur adipisicing elit. Quisquam, voluptate. amet co nsectetur adipisicing elit. Quisquam, voluptate.
          `
        }}
      />
      <BillboardText
        sx={{
          marginTop: '1rem',
          textAlign: 'end',
          fontWeight: theme => theme.typography.fontWeightMedium,
        }}
      >
        - Sahitya Reddy Bollavaram
      </BillboardText>
    </Box>
  )
};

export default styled(BillBoard)(({ theme, active = true }) => ({
  borderRadius: '0 0.75rem 0.75rem 0',
  height: '100%',
  width: '100%',
  gridColumn: '1 / 21',
  gridRow: '3 / 9',
  zIndex: 1,
  boxShadow: theme.shadows[1],

  backgroundColor: theme.Colors.matmaila,
  color: theme.Colors.black,
  padding: theme.Spaces.xxl + ' ' + theme.Spaces.xl,

  transform: active ? 'translateX(100%)' : `translateX(${theme.Spaces.xl})`,

  '@media screen and (max-height: 1080px)': {
    gridColumn: '13 / 21',
    gridRow: '5 / 17',
    padding: theme.Spaces.xxl + ' ' + theme.Spaces.lg,
    transform: active ? 'translateX(0)' : 'translateX(-91%)',
  },

  '@media screen and (max-height: 1010px)': {
    gridColumn: '13 / 21',
    gridRow: '4 / 18',
  },
  
  '@media screen and (max-height: 960px)': {
    gridColumn: '13 / 21',
    gridRow: '5 / 19',
  },
  
  '@media screen and (max-height: 860px)': {
    gridColumn: '13 / 21',
    gridRow: '3 / 19',
  },
  
}));