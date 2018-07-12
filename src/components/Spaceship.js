import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
        <h2>{name}</h2>
        <p>Speed: <em>{speed}</em></p>
        <p>Has Rockets: {hasRockets ? 'Y' : 'N'}</p>
        <p>Colors: {colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
