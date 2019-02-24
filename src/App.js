import React, { Component } from 'react';

// SASS
import './Stylesheets/Main.scss'

// Components
import Name from './Components/Name.jsx';
import Hero from './Components/Jumbotron.jsx';
import Navbar from './Components/Navbar.jsx';
import Stack from './Components/Stack.jsx';
import Contact from './Components/Contact.jsx';
import BackToTop from './Components/BackToTop.jsx';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Name />
        <Navbar />
        <Hero />
        <Stack />
        <Contact />
        <BackToTop />
      </div>
    );
  }
}

export default App;