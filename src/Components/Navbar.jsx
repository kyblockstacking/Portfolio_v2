import React from 'react';

class Navbar extends React.Component {

  render() {

    return (
      <div>
        <div className='navbar fade-in-top'>
          <a href='#projects' className='navLinks'>PROJECTS</a>
          <span className='separateLinks'>&nbsp;|&nbsp;</span>
          <a href='#about' className='navLinks'>ABOUT</a>
          <span className='separateLinks'>&nbsp;|&nbsp;</span>
          <a href='#stack' className='navLinks'>STACK</a>
          <span className='separateLinks'>&nbsp;|&nbsp;</span>
          <a href='#contact' className='navLinks'>CONTACT</a>
          <span className='separateLinks'>&nbsp;|&nbsp;</span>
          <a href='https://github.com/kyblockstacking/Resume' target='_blank' rel='noopener noreferrer' className='navLinks'>RÉSUMÉ</a>
        </div>
      </div>
    );
  };

};

export default Navbar;