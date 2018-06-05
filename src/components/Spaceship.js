// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Spaceship: {this.props.name}</h1>
          <p>Speed: {this.props.speed}</p>
          <p>Rockets: {this.props.hasRockets}</p>
          <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
