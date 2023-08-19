interface Size {
  height: string;
  width: string;
};

export interface Sizes {
  icon: {
    extraSmall: Size;
    small: Size;
    default: Size;
    large: Size;
    extraLarge: Size;
  };
};

const sizes: Sizes = {
  icon: {
    extraSmall: {
      height: '0.75rem',
      width: '0.75rem',
    },
    small: {
      height: '1rem',
      width: '1rem',
    },
    default: {
      height: '1.25rem',
      width: '1.25rem',
    },
    large: {
      height: '2.5rem',
      width: '2.5rem',
    },
    extraLarge: {
      height: '3rem',
      width: '3rem',
    },
  },
};

export default sizes;