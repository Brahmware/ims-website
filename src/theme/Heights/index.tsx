export interface Heights {
  header: {
    expanded: string;
    default: string;
    contracted: string;
  };
  footer: string;
};

export const heights: Heights = {
  header: {
    expanded: '6rem',
    default: '5rem',
    contracted: '4rem',
  },
  footer: '3rem',
};