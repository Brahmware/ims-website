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
    expanded: '5.25rem',
    default: '4.25rem',
    contracted: '3.25rem',
  },
  navbar: {
    hamburger: '1.5rem',
  },
  footer: '3rem',
};