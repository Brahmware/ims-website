import { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
};

export interface ContainedButtonProps extends ButtonProps {
};

export interface IconButtonProps extends ButtonProps {
  target?: string;
  flippedTheme?: boolean;
};

export interface OutlinedButtonProps extends ButtonProps {
};

export interface TextButtonProps extends ButtonProps {
};

export interface CartButtonProps extends IconButtonProps {
};