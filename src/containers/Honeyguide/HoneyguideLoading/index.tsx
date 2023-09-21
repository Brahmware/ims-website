import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { ContentType } from '..';
import Link from 'next/link';
import OurNetwork from '@icons/ourNetwork';

const StyledLink = styled(Link)(({ theme }) => ({
  margin: '0 ' + theme.Spaces.hecto,
}));

interface HoneyguideLoadingProps extends BoxProps {
  children?: React.ReactNode;
  loadingContent?: ContentType[];
};

const HoneyguideLoading: React.FC<HoneyguideLoadingProps> = ({
  loadingContent,
  ...props
}) => {

  return (
    <Box {...props}>
      {
        loadingContent?.map((content, index) => {

          const IconComponent = OurNetwork[content.id || 'IMSLife'];
          return (
            <StyledLink
              key={index}
              href={content.link || '/'}
              aria-label={content.title || ''}
            >
              <IconComponent />
            </StyledLink>
          )
        })
      }
    </Box>
  )
};

export default styled(HoneyguideLoading)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});