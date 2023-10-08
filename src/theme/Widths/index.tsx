export interface Widths {
  navbar: {
    linkHome: string;
    linkHomeMedium: string;
    linkHomeSmall: string;
    hamburger: string;
  };
  donationPanel: {
    width: string;
  };
};

export const widths: Widths = {
  navbar: {
    linkHome: '12em',
    linkHomeMedium: '10em',
    linkHomeSmall: '3.5em',
    hamburger: '1.5rem',
  },
  donationPanel: {
    width: '32rem',
  },
};