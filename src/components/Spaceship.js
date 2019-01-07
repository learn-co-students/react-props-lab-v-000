// Code The Spaceship Component Here
import React from 'react';
import ReactDom from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div class="space-ship">
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}
