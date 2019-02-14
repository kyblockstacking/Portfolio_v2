import React, { Component } from 'react';
import './App.css';

//components
import Hero from './Components/Jumbotron/Jumbotron.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

//sass css
import './Components/Jumbotron/Jumbotron.scss';
import './Components/Navbar/Navbar.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;