import React, { Component } from 'react';
import './App.css';

//components
import Hero from './Components/Jumbotron/Jumbotron';

//sass css
import './Components/Jumbotron/Jumbotron.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;