import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>KY</span>
      <a className='navLinks'>CONTACT</a>
      <span className='seperateLinks'>&nbsp;|&nbsp;</span>
      <a className='navLinks'>ABOUT</a>
      <span className='seperateLinks'>&nbsp;|&nbsp;</span>
      <a className='navLinks'>TECHNOLOGY</a>
    </div>
  );
};

export default Navbar;