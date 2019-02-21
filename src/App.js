import React, { Component } from 'react';
import './App.css';

//components
import Hero from './Components/Jumbotron/Jumbotron.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Stack from './Components/Stack/Stack.jsx';
import BackToTop from './Components/BackToTop/BackToTop.jsx';

//sass css
import './Components/Jumbotron/Jumbotron.scss';
import './Components/Navbar/Navbar.scss';
import './Components/Stack/Stack.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <BackToTop />
        <Hero />
        <Stack />
      </div>
    );
  }
}

export default App;