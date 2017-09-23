// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets? {this.props.hasRockets ? 'true' : 'false'}</p>
        <p>Color: {this.props.colors.join(', ')} </p>
      </div>
    );
  }
};


Spaceship.defaultProps= {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
