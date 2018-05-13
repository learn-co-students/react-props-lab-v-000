// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
      <h2>{this.props.name}</h2>
      <h3>{this.props.speed}</h3>
      <h3>{this.props.hasRockets.toString()}</h3>
      <h3>{this.props.colors.join(', ')}</h3>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
