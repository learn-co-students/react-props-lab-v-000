import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
        <h1>{name}</h1>
        <p>Speed: <strong>{speed}</strong></p>
        <p>Has Rockets: { hasRockets ? 'Y' : 'N' }</p>
        <p>Colors: { colors.join(', ') }</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
