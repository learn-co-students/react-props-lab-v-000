// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>Name: {this.props.name} </h1>
        <p>Speed: {this.props.speed} </p>
        <p>HasRockets: {this.props.hasRockets} </p>
        <p>Colors: {this.props.colors} </p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

// OR declare your component first, and then:
export default Spaceship;
