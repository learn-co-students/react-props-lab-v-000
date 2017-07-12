import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>Ship Speed: {this.props.speed}</h3>
        <h3>Rocket Powered: {this.props.hasRockets}</h3>
        <h3>Ship Colors: {this.props.colors}</h3>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}