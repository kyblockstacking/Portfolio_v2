import React, { Component } from 'react';
import './App.css';

//components
import Name from './Components/Name/Name.jsx';
import Hero from './Components/Jumbotron/Jumbotron.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Stack from './Components/Stack/Stack.jsx';
import BackToTop from './Components/BackToTop/BackToTop.jsx';

//sass css
import './Components/Name/Name.scss';
import './Components/Jumbotron/Jumbotron.scss';
import './Components/Navbar/Navbar.scss';
import './Components/Stack/Stack.scss';
import './Components/BackToTop/BackToTop.scss';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Name />
        <Navbar />
        <Hero />
        <Stack />
        <BackToTop />
      </div>
    );
  }
}

export default App;