import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { NavMap } from '@datatypes/NavMap';
import TitleText from '@components/Texts/TitleText';
import UnitPage from './UnitPage';

const StyledTitleText = styled(TitleText)(({ theme }) => ({
  fontSize: '1.125rem',
  whiteSpace: 'nowrap',
  lineHeight: '1.75',
}));

interface UnitPagegroupProps extends BoxProps {
  children?: React.ReactNode;
  pageGroup: NavMap;
};

const UnitPagegroup: React.FC<UnitPagegroupProps> = ({
  pageGroup: {
    title: groupName,
    items: groupPages,
  },
}) => {
  return (
    <Box
      component='ul'
    >
      <StyledTitleText>{groupName}</StyledTitleText>
      {groupPages?.map((page, index) => (
        <Box
          key={index}
          component='li'
          sx={{ lineHeight: '1.25' }}
        >
          <UnitPage
            title={page.title}
            link={page.link}
          />
        </Box>
      ))}
    </Box>
  )
};

export default UnitPagegroup;