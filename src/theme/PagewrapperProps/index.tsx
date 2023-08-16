import { BoxProps } from "@mui/material";
import { breakpoints } from "@theme/Breakpoints";
import { heights } from "@theme/Heights";
import { spaces } from "@theme/Spaces";

export interface PageWrapperProps extends BoxProps {
  margin?: string;
  padding?: string;
  maxWidth?: string;
}

export const pageWrapperProps: PageWrapperProps = {
  margin: '0 auto',
  padding: `0 ${spaces.lg}`,
  paddingTop: heights.header.expanded,
  paddingBottom: spaces.sm,
  maxWidth: breakpoints.values.xl + breakpoints.unit,
};
