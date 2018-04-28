// Code The Spaceship Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
        <h1>{ name }</h1>
        <h3>Ship info:</h3>
        <p>{ speed }</p>
        <p>{ hasRockets }</p>
        <ul>
          {colors.map((color) => <li>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: PropTypes.string,
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
