// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class SpaceShip extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed} </h3>
        <p>Has rockets: {this.props.hasRockets} </p>
        <small>
          Colors: {this.props.colors.join(', ')}
        </small>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default SpaceShip
