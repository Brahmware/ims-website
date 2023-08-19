export interface Heights {
  header: {
    expanded: string;
    default: string;
    contracted: string;
  };
  navbar: {
    hamburger: string;
  }
  footer: string;
};

export const heights: Heights = {
  header: {
    expanded: '6rem',
    default: '4rem',
    contracted: '3.5rem',
  },
  navbar: {
    hamburger: '1.5rem',
  },
  footer: '3rem',
};