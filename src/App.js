import React, { Component } from 'react';
import './App.css';

//components
import Hero from './Components/Jumbotron/Jumbotron.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

//sass css
import './Components/Jumbotron/Jumbotron.scss';
import './Components/Navbar/Navbar.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Hero />
        <div style={{ height: '100vh' }} id='hello'>HELLO</div>
      </div>
    );
  }
}

export default App;