import React from 'react';

class Navbar extends React.Component {

  render() {

    return (
      <div className='navbar fade-in-top'>
        <span className='logo bounce-in-top'>KY</span>
        <a href='#hello' className='navLinks'>CONTACT</a>
        <span className='seperateLinks'>&nbsp;|&nbsp;</span>
        <a href='#about' className='navLinks'>ABOUT</a>
        <span className='seperateLinks'>&nbsp;|&nbsp;</span>
        <a href='#technology' className='navLinks'>TECHNOLOGY</a>
      </div>
    );
  };

};

export default Navbar;