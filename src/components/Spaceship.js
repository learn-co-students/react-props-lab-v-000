import React from 'react';

class Spaceship extends React.Component {
  render () {
    return (
      <div className="space-ship">
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>Has rockets: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors.join(', ')}</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;