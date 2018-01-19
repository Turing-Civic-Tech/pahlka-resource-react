import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div id='card-container'>
        <Card />
      </div>
    )
  }
};

export default CardContainer;