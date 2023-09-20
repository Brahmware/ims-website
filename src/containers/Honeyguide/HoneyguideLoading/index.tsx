import IMSHistory from '@icons/ourNetwork/IMSHistory';
import IMSLife from '@icons/ourNetwork/IMSLife';
import IMScience from '@icons/ourNetwork/IMScience';
import PopNews from '@icons/ourNetwork/PopNews';
import WorldTv from '@icons/ourNetwork/WorldTv';
import { Box, BoxProps, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const StyledLink = styled(Link)(({ theme }) => ({
  margin: '0 ' + theme.Spaces.hecto,
}));

const HoneyguideLoading: React.FC<BoxProps> = ({
  ...props
}) => {
  return (
    <Box {...props}>
      <StyledLink href='https://imslife.indianmediasyndicate.com'>
        <IMSLife />
      </StyledLink>
      <StyledLink href='https://imscience.indianmediasyndicate.com'>
        <IMScience />
      </StyledLink>
      <StyledLink href='https://worldtv.indianmediasyndicate.com'>
        <WorldTv />
      </StyledLink>
      <StyledLink href='https://popnews.indianmediasyndicate.com'>
        <PopNews />
      </StyledLink>
      <StyledLink href='https://imshistory.indianmediasyndicate.com'>
        <IMSHistory />
      </StyledLink>
    </Box>
  )
};

export default styled(HoneyguideLoading)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));