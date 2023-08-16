import React from 'react'
import Search from './Search';
import Hamburger from './Hamburger';
import Join from './Join';

const Toolbar = () => {
  return (
    <React.Fragment>
      <Search />
      <Join />
      <Hamburger />
    </React.Fragment>
  )
}

export default Toolbar