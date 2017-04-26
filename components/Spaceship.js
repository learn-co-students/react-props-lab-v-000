import React from 'react'

export default class Spaceship extends React.Component {
  render () {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Color(s): {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
