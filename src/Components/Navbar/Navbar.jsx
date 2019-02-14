import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a className='logo'>
        KY
        <a className='navLinks'>CONTACT</a>
        <span className='navLinks'>&nbsp;|&nbsp;</span>
        <a className='navLinks'>ABOUT</a>
        <span className='navLinks'>&nbsp;|&nbsp;</span>
        <a className='navLinks'>TECHNOLOGY</a>
      </a>
    </div>
  );
};

export default Navbar;