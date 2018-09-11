import React, { Component } from 'react';

export default class Spaceship extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    );
  }
}
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
