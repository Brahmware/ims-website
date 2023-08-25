import { LinkProps as MuiLinkProps } from "@mui/material";

export interface LinkProps extends MuiLinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
};