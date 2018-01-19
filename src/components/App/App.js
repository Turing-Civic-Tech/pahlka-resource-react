import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import Card from '../Card/Card.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
        <h1> Resource Matching </h1>
        <h2> Moved to Civiv Tech Organization </h2>
        </header>
        <Card />
      </div>
    );
  }
}

export default App;
