// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
      return (
        <div className="Spaceship">
          <h1>Hello, {this.props.name}</h1>
          <h2>{this.props.speed}</h2>
          <h2>{this.props.hasRockets}</h2>
          <small>Colors: {this.props.colors.join(', ')}</small>
        </div>
      );
    }
  }

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets : false,
  colors : ['black', 'red']
};
