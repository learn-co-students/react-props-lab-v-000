// Code The Spaceship Component Here
import React, { Component } from 'react';

export default class Spaceship extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.speed}</li>
          <li>{this.props.hasRockets}</li>
          <li>{this.props.colors.join(", ")}</li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  name: "Bababooey",
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};
