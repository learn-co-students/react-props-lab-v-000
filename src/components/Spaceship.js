// Code The Spaceship Component Here
import React, { Component }from "react";
import ReactDOM from 'react-dom';
import { runInThisContext } from "vm";



export default class Spaceship extends Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <h4>Speed: {this.props.speed}</h4>
        <p>Rockets?: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}