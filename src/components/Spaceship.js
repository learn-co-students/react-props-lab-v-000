// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship_info">
        <h1>{this.props.name}</h1>
        <h3>Top Speed: {this.props.speed}</h3>
        <h4>Has Rockets: {this.props.hasRockets.toString()}</h4>
        <strong>Colors: {this.props.colors.join(", ")}</strong>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}
