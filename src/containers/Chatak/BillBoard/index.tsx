import React from 'react';
import BodyText from '@components/Texts/BodyText';
import { Box, BoxProps, styled } from '@mui/material';
import TitleText from '@components/Texts/TitleText';
import Description from './Description';

const BillBoardTitle = styled(TitleText)(({ theme }) => ({
  textAlign: 'start',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  color: 'inherit',
}));

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

  const description = `The Bengal famine of 1943 was a famine in the Bengal province of British India (now Bangladesh and eastern Bharat) during World War II. 
  An estimated 2.1–3 million, out of a population of 60.3 million, died of starvation, malaria, or other diseases aggravated by malnutrition, 
  population displacement, unsanitary conditions which was deliberately imposed on the Bengali populace by Winston Churchill.`;

  return (
    <Box
      {...props}
      sx={{ transition: active ? `transform ${transitionTime}ms ease-in-out` : 'none' }}
    >
      <BillBoardTitle>Description</BillBoardTitle>
      <Description>{description}</Description>
      <BillBoardTitle sx={{ mt: 2 }}>Artist</BillBoardTitle>
      <BillboardText>Sahitya Reddy Bollavaram</BillboardText>
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

  '@media screen and (max-width: 1360px)': {
    gridColumn: '5 / 21'
  },

  '@media screen and (max-height: 1230px)': {
    gridColumn: '13 / 21',
    gridRow: '5 / 17',
    padding: theme.Spaces.xxl + ' ' + theme.Spaces.lg,
    transform: active ? 'translateY(0)' : 'translateY(-91%)',

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