// Code The Spaceship Component Here

import React from 'react'
import PropTypes from 'prop-types'

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.speed}</h3>
        <h4>{this.props.hasRockets.toString()}</h4>
        <h4>{this.props.colors.join(", ")}</h4>
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
