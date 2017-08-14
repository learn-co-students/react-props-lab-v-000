import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h4>Speed: {this.props.speed}</h4>
        <h4>Has Rockets: {this.props.hasRockets.toString()}</h4>
        <h4>Colors: {this.props.colors.toString()}</h4>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
