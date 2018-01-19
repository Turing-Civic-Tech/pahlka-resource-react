import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import Card from '../Card/Card.js';
import Login from '../Login/Login.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Routes from '../Routes/Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1> Resource Matching </h1>
        </header>
        <Routes />
        <CardContainer />
      </div>
    );
  }
}

export default (App);
