export default interface SVGProps extends React.SVGProps<SVGSVGElement> {
  width?: string
  height?: string
};

export interface IMSLogoProps extends SVGProps {
  color?: string
  size?: "small" | "medium" | "large"
};

export interface SocialMediaIconProps extends SVGProps {
  color?: string
  hovered?: boolean
  size?: "small" | "medium" | "large"
};

export interface UtilityIconProps extends SVGProps {
  color?: string;
  size?: "small" | "medium" | "large";
  hovered?: boolean;
  active?: boolean;
};

export interface HambugerIconProps extends UtilityIconProps {
  open?: boolean;
};