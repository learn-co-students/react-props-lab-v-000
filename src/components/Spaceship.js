// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets?: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {speed: 'slow', hasRockets: false, colors: ['black', 'red']};

export default Spaceship;