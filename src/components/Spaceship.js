import React from 'react'

export default class SpaceShip extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
