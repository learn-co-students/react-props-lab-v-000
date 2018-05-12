// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render () {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <small>{this.props.colors.join(', ')}</small>
        <h3>Speed: {this.props.speed}</h3>
        <p>Has Rockets?: {this.props.hasRockets}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship
