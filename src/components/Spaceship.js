import React from 'react';
// Code The Spaceship Component Here

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h4>{this.props.hasRockets}</h4>
        <p>{this.props.colors}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};
