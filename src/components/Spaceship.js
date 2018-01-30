// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name is {this.props.name}</h1>
        <h4>Speed is {this.props.speed}</h4>
        <p>This ship has rockets? {this.props.hasRockets} and it's colors are {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
