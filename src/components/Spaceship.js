// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props

    return (
      <div>
      <p> {this.props.name} </p>
      <p> {this.props.speed} </p>
      <p> {this.props.hasRockets} </p>
      <p> {this.props.colors} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  speed: 'slow',
  hasRockets: false
}

export default Spaceship
