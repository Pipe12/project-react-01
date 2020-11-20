import React from 'react';

const Header = ({ children, name, profession }) => (
  <header>
    <h1 className='Header-title'>{name}</h1>
    <h3 className='Header-job-title'>{profession}</h3>
    { children }
  </header>
);

export default Header;
