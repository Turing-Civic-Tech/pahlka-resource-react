import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import Card from '../Card/Card.js';
import Login from '../Login/Login.js';

        // <Nav />
        // <header className="App-header">
        // <h1> Resource Matching </h1>
        // </header>
        // <Card />


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
