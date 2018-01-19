import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1> Resource Matching </h1>
        </header>
        <CardContainer />
      </div>
    );
  }
}

export default App;
