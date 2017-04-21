import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has Rockets?: {this.props.hasRockets}</h3>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
}

export default Spaceship;
