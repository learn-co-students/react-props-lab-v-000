// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <div>Speed: {this.props.speed} </div>
        <div>Has Rockets: {this.props.hasRockets} </div>
        <div>Colors: {this.props.colors.join(', ')}</div>
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


