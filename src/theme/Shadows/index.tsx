interface Shadow {
  zIndex: number;
  boxShadow: string;
};

export interface Shadows {
  noshadow: Shadow;
  lower: Shadow;
  low: Shadow;
  medium: Shadow;
  high: Shadow;
  higher: Shadow;
};

const shadows: Shadows = {
  noshadow: {
    zIndex: 0,
    boxShadow: 'none',
  },
  lower: {
    zIndex: 1,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  low: {
    zIndex: 2,
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
  },
  medium: {
    zIndex: 3,
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
  },
  high: {
    zIndex: 4,
    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.05)',
  },
  higher: {
    zIndex: 5,
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
  },
};

export default shadows;