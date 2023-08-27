import { TypographyProps as TypographyPropsMui, TypographyVariant } from '@mui/material';

export interface TypographyProps extends TypographyPropsMui {
  component?: React.ElementType;
  variant?: TypographyVariant;
};

export interface TitleProps extends TypographyProps {
};

export interface ContactTitleprops extends TypographyProps {
};

export interface ContactTextProps extends TypographyProps {
};

export interface CopyrightTextProps extends TypographyProps {
};

export interface ThemeNameProps extends TypographyProps {
};