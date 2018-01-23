// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-card">
        <h1>{this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has Rockets: {this.props.hasRockets}</h3>
        <h3>Color: {this.props.colors.join(', ')}</h3>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};


export default Spaceship;
