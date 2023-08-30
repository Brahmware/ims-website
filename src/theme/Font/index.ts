import localFont from 'next/font/local';

const gotham = localFont({
  src: [
    {
      path: './fontFiles/Gotham-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fontFiles/Gotham-ultra.otf',
      weight: '1000',
      style: 'normal',
    }
  ]
});

export default gotham;