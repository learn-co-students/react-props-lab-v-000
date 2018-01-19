import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(", ")}</p>
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
