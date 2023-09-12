import { DividerProps } from '@interfaces/DividerProps';
import { styled, Divider as MuiDivider } from '@mui/material';

const Divider = styled(MuiDivider)<DividerProps>(({ theme, size, orientation }) => ({
  margin: (orientation === 'vertical' && `0 ${theme.Spaces.md}`) || `${theme.Spaces.xl} 0`,
  height: theme.Spaces[size || 'xl'],
}));

export default Divider;

export const ContentTitleDivider = styled(({ ...props }) => <Divider {...props} flexItem />)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: theme.Spaces.mega,
  height: '1px'
}));