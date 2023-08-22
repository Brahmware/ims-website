import React from 'react';
import Hamburger from './Hamburger';
import Join from './Join';
import Search from '@components/Search';

const Toolbar = () => {
  return (
    <React.Fragment>
      <Search />
      <Join />
      <Hamburger />
    </React.Fragment>
  )
};

export default Toolbar;