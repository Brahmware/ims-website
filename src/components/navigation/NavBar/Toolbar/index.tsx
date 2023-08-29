import React from 'react';
import Hamburger from './Hamburger';
import Join from './Join';
import Search from '@components/Search';
import Cart from '@components/Cart';

const Toolbar = () => {
  return (
    <React.Fragment>
      <Search />
      <Cart />
      <Join />
      <Hamburger />
    </React.Fragment>
  )
};

export default Toolbar;