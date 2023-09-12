import ContainedButton from '@components/Button/ContainedButton';
import { ContentTitleDivider } from '@components/Dividers';
import { Box, BoxProps, Divider, Typography, styled } from '@mui/material';
import React from 'react';

interface KoelShowcaseProps extends BoxProps {
  title?: string;
  sloganHTML?: string;
  descriptionHTML?: string;
  button?: {
    buttonText: string
  };
};

const Content: React.FC<KoelShowcaseProps> = ({
  title,
  sloganHTML,
  descriptionHTML,
  button,
  ...props
}) => {
  return (
    <Box {...props}>
      <Typography
        variant="body2"
        component='h3'
        sx={{ my: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        component='h2'
        dangerouslySetInnerHTML={{ __html: sloganHTML || '' }}
      />
      <ContentTitleDivider sx={{ my: 3 }} />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: descriptionHTML || '' }}
      />
      {
        button && (
          <ContainedButton
            color="secondary"
            aria-label='view more about us'
            vocab='view more about us'
            sx={{ my: 3 }}
          >
            {button.buttonText}
          </ContainedButton>
        )
      }
    </Box>
  )
};

export default styled(Content)(({ theme }) => ({
  height: 'max-content',
  width: '50%',
  margin: 'auto 0',
}));