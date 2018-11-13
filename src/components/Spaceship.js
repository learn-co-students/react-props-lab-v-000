import React from 'react';

export default class SpaceShip extends React.Component {
  render () {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <ul>
      <li><strong>Speed:</strong> {this.props.speed}</li>
      <li><strong>Weapons:</strong> {this.props.hasRockets}</li>
      <li><strong>Colors:</strong> {this.props.colors}</li>
      </ul>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
