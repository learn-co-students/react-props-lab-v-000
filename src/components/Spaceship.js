// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render () {
    return (
      <div className='spaceship'>
        <h3>Name: {this.props.name}</h3>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Rockets?: {this.props.hasRockets}</h3>
        <h3>Colors: {this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}
