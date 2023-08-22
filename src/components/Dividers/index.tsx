import { DividerProps } from '@interfaces/DividerProps';
import { styled, Divider as MuiDivider } from '@mui/material';

const Divider = styled(MuiDivider)<DividerProps>(({ theme, size, orientation }) => ({
  margin: (orientation === 'vertical' && `0 ${theme.Spaces.md}`) || `${theme.Spaces.xl} 0`,
  height: theme.Spaces[size || 'xl'],
}));

export default Divider;