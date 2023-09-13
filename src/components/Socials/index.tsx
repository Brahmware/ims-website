import { Box, BoxProps, styled } from '@mui/material';
import { SocialIconsProps } from '@interfaces/SocialIconsProps';
import SocialLink from './SocialLink';
import FacebookLogo from '@icons/socialMedia/FacebookLogo';
import XLogo from '@icons/socialMedia/XLogo';
import LinkedinLogo from '@icons/socialMedia/LinkedinLogo';
import YoutubeLogo from '@icons/socialMedia/YoutubeLogo';
import InstagramLogo from '@icons/socialMedia/InstagramLogo';
import WhatsappLogo from '@icons/socialMedia/WhatsappLogo';

interface SocialsWrapperProps extends BoxProps {
  gap?: string;
};

const SocialsWrapper = styled(Box)<SocialsWrapperProps>(({ theme, gap }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',

  '& > a': {
    margin: `0 ${gap || theme.Spaces.xs}`,

    '&:first-of-type': {
      marginLeft: 0,
    },

    '&:last-of-type': {
      marginRight: 0,
    },
  },

}));

const Socials = ({ links, options }: SocialIconsProps) => {
  return (
    <SocialsWrapper {...options}>
      {links.facebook && <SocialLink href={links.facebook}><FacebookLogo /></SocialLink>}
      {links.twitter && <SocialLink href={links.twitter}><XLogo /></SocialLink>}
      {links.linkedin && <SocialLink href={links.linkedin}><LinkedinLogo /></SocialLink>}
      {links.youtube && <SocialLink href={links.youtube}><YoutubeLogo /></SocialLink>}
      {links.instagram && <SocialLink href={links.instagram}><InstagramLogo /></SocialLink>}
      {links.whatsapp && <SocialLink href={links.whatsapp}><WhatsappLogo /></SocialLink>}
    </SocialsWrapper>
  )
}

export default Socials