import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
        <h1> Resource Matching </h1>
        </header>
      </div>
    );
  }
}

export default App;
