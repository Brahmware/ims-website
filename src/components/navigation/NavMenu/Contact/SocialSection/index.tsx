import Socials from '@components/Socials';
import { Divider, Typography, styled } from '@mui/material';
import React from 'react';

const socialsLinks = {
  facebook: 'https://www.facebook.com/indianmediasyndicate',
  twitter: 'https://twitter.com/indianmediasyn',
  linkedin: 'https://www.linkedin.com/company/indianmediasyndicate/',
  youtube: 'https://www.youtube.com/channel/UC6XQGgj5zZj3qjJWgQ4b6Xg',
  instagram: 'https://www.instagram.com/indianmediasyndicate/',
};

const SocialsSectionWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));

const Separator = styled(Divider)(({ theme }) => ({
  margin: `0 ${theme.Spaces.md}`,
  height: theme.Spaces.xl,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
}));

const SocialSection = () => {
  return (
    <SocialsSectionWrapper>
      <Title variant="body1">Follow us on</Title>
      <Separator orientation="vertical" flexItem />
      <Socials links={socialsLinks} />
    </SocialsSectionWrapper>
  )
};

export default SocialSection