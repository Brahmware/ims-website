import Button from '@components/Button';
import ContainedButton from '@components/Button/ContainedButton';
import { Box, BoxProps, Divider, Typography, styled } from '@mui/material';
import React from 'react';

interface KoelShowcaseProps extends BoxProps {
  title?: string;
};

const Content: React.FC<KoelShowcaseProps> = ({
  title,
  ...props
}) => {
  return (
    <Box {...props}>
      <Typography
        variant="body2"
        component='h3'
        sx={{ my: 2 }}
      >
        ABOUT US
      </Typography>
      <Typography
        variant="h2"
        component='h2'
        dangerouslySetInnerHTML={{
          __html: `India, Explore! <br /> Dream! Lead!`
        }}
      />
      <Divider flexItem sx={{ my: 3, width: '10em', backgroundColor: 'primary.main' }} />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{
          __html: `Indian Media Syndicate endeavours to be the global leader in Exploration, Scientific Communications, Real Life Entertainment, serving enthusiastic Explorers around the world generating scientific journalism that inspires, informs, and entertains every age, at grassroots level, soaring high. <br />
          IMS is developing its’ unique voice AI for making real-time translation possible in all Indian languages. <br />
          This is an Indian family of informational, educational, and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by the world.`
        }}
      />
      <ContainedButton
        color="secondary"
        aria-label='view more about us'
        vocab='view more about us'
        sx={{ my: 3 }}
      >
        View More
      </ContainedButton>
    </Box>
  )
};

export default styled(Content)(({ theme }) => ({
  height: 'max-content',
  width: '50%',
  margin: 'auto 0',
}));