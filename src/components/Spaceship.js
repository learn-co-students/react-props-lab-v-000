// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
          <h2>Name:{this.props.name}</h2>
          <h2>Speed:{this.props.speed}</h2>
          <h2>Rockets:{this.props.hasRockets ? "Yes" : "No"}</h2>
          <h2>Colors:</h2>
          <p><ul>{this.props.colors.map(color =><li>{color}</li>)}</ul>
          </p>
      </div>

    );
  }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
  };
