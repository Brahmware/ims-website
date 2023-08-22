export interface SocialIconsOPtions {
  size?: string;
  gap?: string;
  genColor?: string;
  hoverColor?: string;
};

export interface SocialMedias {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  whatsapp?: string;
};

export interface SocialIconsProps {
  options?: SocialIconsOPtions;
  links: SocialMedias;
};