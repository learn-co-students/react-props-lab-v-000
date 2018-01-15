// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
        <div className="space-ship">

          <h2>{this.props.name}</h2>

          <p>Speed: {this.props.speed}</p>

          <p>Rockets: {this.props.hasRockets}</p>

          <p>Color: {this.props.colors.join(', ')}</p>
        </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
}

export default Spaceship;
