import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import TitleText from '@components/Texts/TitleText';
import SloganText from '@components/Texts/SloganText';
import { ContentTitleDivider } from '@components/Dividers';
import BodyText from '@components/Texts/BodyText';
import { Donation } from '@datatypes/Donation';

interface MotivationBoxProps extends BoxProps{
  title?: Donation['title'];
  slogan?: Donation['slogan'];
  description?: Donation['description'];
};

const MotivationBox: React.FC<MotivationBoxProps> = ({
  title,
  slogan: sloganHTML,
  description: descriptionHTML,
  ...props
}) => {
  return (
    <Box {...props}>
      <SloganText> {title} </SloganText>
      <TitleText dangerouslySetInnerHTML={{ __html: sloganHTML || '' }} />
      <ContentTitleDivider sx={{ my: 3 }} />
      <BodyText
        dangerouslySetInnerHTML={{ __html: descriptionHTML || '' }}
      />
    </Box>
  )
};

export default styled(MotivationBox)(({ theme }) => ({
  gridColumn: '3 / 4',
  gridRow: '4 / 5',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));