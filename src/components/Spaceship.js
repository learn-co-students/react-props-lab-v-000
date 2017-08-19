import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <title>{ this.props.name }</title>
        <p><strong>Speed:</strong>{ this.props.speed}</p>
        <p><strong>Has rockets:</strong>{ this.props.hasRockets }</p>
        <p><strong>Colors: { this.props.colors.join(', ')}</strong></p>
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
